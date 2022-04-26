import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import {
  Placement,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  useRole,
  useDismiss
} from "@floating-ui/react-dom-interactions";

interface Props {
  label: string;
  placement?: Placement;
  children: JSX.Element;
}

const Container = styled.div`
  background: ${({ theme }) => theme.tooltip()};
  color: ${({ theme }) => theme.label()};
  pointer-events: none;
  border-radius: ${borderRadius()}px;
  padding: ${gridSize() * 0.5}px ${gridSize() * 1}px;
  box-shadow: ${({ theme }) => theme.elevation[200]};
  z-index: ${layers.tooltip()};
  line-height: ${gridSize() * 2 / fontSizeSmall()}em;
  font-size: ${fontSizeSmall()}px;
`;

const Tooltip = ({ children, label, placement = "top" }: Props) => {
  const [open, setOpen] = useState(false);

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
    refs,
    update
  } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [offset(gridSize() * 2), flip(), shift()]
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: "tooltip" }),
    useDismiss(context)
  ]);

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
    return () => null;
  }, [refs.reference, refs.floating, update, open]);
  
  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: reference, ...children.props })
      )}
      {open && (
        <Container
          {...getFloatingProps({
            ref: floating,
            style: {
              position: strategy,
              top: y ?? "",
              left: x ?? "",
              visibility: label ? 'visible' : 'hidden'
            }
          })}
        >
          {[label]}
        </Container>
      )}
    </>
  );
};

Tooltip.defaultProps = {
  placement: 'bottom'
}

export default Tooltip;