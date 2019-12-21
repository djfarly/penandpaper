/**
 * generate a random className
 */
export function getClassName(a?: any): string {
  return a
    ? (a ^ ((Math.random() * 36) >> a)).toString(36)
    : ('sx-' + 1e7).replace(/[01]/g, getClassName);
}
