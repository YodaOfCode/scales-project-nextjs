/** @jsx jsx */
import { jsx, Link as LinkTo } from 'theme-ui';

export function Link({ path, label, children, ...rest }) {
  return (
    <LinkTo {...rest} href={path}>
      {children || label}
    </LinkTo>
  );
}


