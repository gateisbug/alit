import styled from 'styled-components'

export const UIModalClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  width: 32px;
  height: 32px;
  box-sizing: border-box;
`

// noinspection CssUnresolvedCustomProperty
export const UIModalContainer = styled.section`
  background-color: var(--modal-surface, #fff);
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 51, 0.08);
  box-sizing: border-box;
`

// noinspection CssUnresolvedCustomProperty
export const UIBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--modal-backdrop, rgba(0, 0, 0, 0.5));
  z-index: 1100;

  padding: 24px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`

// export interface IModalUIProps {
//   open?: boolean
//   onClickAway?: () => void
//   children?: ReactNode
// }
//
// export function useModal({ open, onClickAway }: IModalUIProps) {
//   const backdropRef = useRef<HTMLDivElement>(null)
//
//   const modelOnClickAway = useCallback(
//     (e: MouseEvent<HTMLDivElement>) => {
//       if (e.target === backdropRef.current && onClickAway !== undefined) {
//         onClickAway()
//       }
//     },
//     [onClickAway],
//   )
//
//   useEffect(() => {
//     if (open) {
//       document.body.setAttribute('style', 'overflow:hidden;')
//     } else {
//       document.body.removeAttribute('style')
//     }
//
//     return () => {
//       document.body.removeAttribute('style')
//     }
//   }, [open])
//
//   return {
//     backdropRef,
//     modelOnClickAway,
//   }
// }
//
// export default function Modal({ open, onClickAway, children }: ModalUIProps) {
//   const { backdropRef, modelOnClickAway } = useModal({ open, onClickAway })
//
//   return open
//     ? createPortal(
//         <Backdrop ref={backdropRef} onClick={modelOnClickAway}>
//           {children}
//         </Backdrop>,
//         document.body,
//       )
//     : null
// }
