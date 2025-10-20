const KEY = "installed_apps";

export function getInstalled() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isInstalled(id) {
  return getInstalled().includes(id);
}

export function installApp(id) {
  const set = new Set(getInstalled());
  set.add(id);
  localStorage.setItem(KEY, JSON.stringify([...set]));
  return [...set];
}

export function uninstallApp(id) {
  const set = new Set(getInstalled());
  set.delete(id);
  const arr = [...set];
  localStorage.setItem(KEY, JSON.stringify(arr));
  return arr;
}
