import { useTabListState, TabListProps } from "@react-stately/tabs";
import { useTab, useTabList, useTabPanel } from "@react-aria/tabs";
import { useEffect, useRef, useState, RefObject } from "react";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { motion } from "framer-motion";

export default function Tabs(props: TabListProps<HTMLDivElement>) {
  // @ts-ignore
  const { className } = props;
  const state = useTabListState(props);
  const ref = useRef<HTMLDivElement>(null);
  const { tabListProps } = useTabList(
    props,
    state,
    ref as RefObject<HTMLElement>
  );
  const [activeTabStyle, setActiveTabStyle] = useState({
    width: 80,
    x: 0,
  });

  useEffect(() => {
    if (!ref.current) return;
    let activeTab = ref.current.querySelector(
      "[role='tab'][aria-selected='true']"
    ) as HTMLDivElement;

    setActiveTabStyle({
      width: activeTab?.offsetWidth,
      x: activeTab?.offsetLeft,
    });
  }, [state.selectedKey]);

  const { focusProps, isFocusVisible } = useFocusRing({
    within: true,
  });
  return (
    <div className={className}>
      <div className="inline-flex items-center h-14 relative z-0 relative px-1 rounded-full border-2 w-max">
        <motion.div
          className={`absolute font-medium left-0 top-1 bottom-1 rounded-full -z-1 ${
            isFocusVisible ? "" : ""
          }`}
          style={{
            backgroundColor: "hsl(193,98.0%,70.0%)",
          }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          animate={{ ...activeTabStyle }}
          initial={{ width: 76, x: 4 }}
        />
        <div
          className="inline-flex gap-x-0.5"
          {...mergeProps(focusProps, tabListProps)}
          ref={ref}
        >
          {[...state.collection].map((item) => (
            <Tab key={item.key} state={state} item={item} />
          ))}
        </div>
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  );
}

function Tab({ item, state }) {
  let { key, rendered } = item;
  let ref = useRef(null);
  let { tabProps } = useTab({ key }, state, ref);
  return (
    <div
      style={{ WebkitTapHighlightColor: "transparent" }}
      className="cursor-default aria-selected:bg-[hsl(193,98.0%,70.0%)] aria-selected:duration-1000 hover:bg-slate-200 select-none px-4 relative focus:outline-none transition-color rounded-full py-2 text-lg text-slate-800 aria-selected:text-slate-950 duration-100"
      // after:content-[''] after:absolute after:-inset-1 after:rounded-full after:z-3 after:border-2
      {...tabProps}
      ref={ref}
    >
      {rendered}
    </div>
  );
}

function TabPanel({ state, ...props }) {
  let ref = useRef(null);
  let { tabPanelProps } = useTabPanel(props, state, ref);
  return (
    <div {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  );
}
