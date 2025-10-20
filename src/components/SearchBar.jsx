import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({
  placeholder = "Search apps…",
  onChange,
  delay = 300,
  onSearchingChange,
}) {
  const [value, setValue] = useState("");
  const isFirst = useRef(true);
  const timerRef = useRef();
  const onChangeRef = useRef(onChange);
  const onSearchingRef = useRef(onSearchingChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  useEffect(() => {
    onSearchingRef.current = onSearchingChange;
  }, [onSearchingChange]);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      if (value === "") {
        onChangeRef.current?.(value);
        return;
      }
    }
    onSearchingRef.current?.(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onChangeRef.current?.(value);
      onSearchingRef.current?.(false);
    }, delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return (
    <label className="input input-bordered flex items-center gap-2 w-full">
      <IoSearch className="text-2xl item-start" />
      <input
        type="text"
        className="grow"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}
