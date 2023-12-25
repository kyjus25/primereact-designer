import { classNames } from 'primereact/utils';

const btn = 'flex gap-1 items-center justify-center rounded-md text-sm transition-colors p-2 whitespace-nowrap';
const primaryInteractable = 'bg-primary text-primary-foreground hover:bg-primary/90 shadow';
const ghost = 'border shadow-sm';
const ghostInteractable = 'border shadow-sm hover:bg-accent hover:text-accent-foreground';
const focus = 'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring';

export default {
  menubar: {
    root: 'sticky top-0 z-50 flex items-center gap-3 px-4 py-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
    menu: 'flex flex-1 gap-4',
    action: 'flex items-center gap-1 text-foreground/60 transition-colors text-sm font-medium',
    submenuIcon: 'text-foreground/30',
    popupIcon: 'hidden',
  },
  button: ({ props, context }) => {
    return {
      root: classNames(
        btn,
        focus,
        'px-4',
        !props.severity ? primaryInteractable : '',
        props.severity === 'secondary' ? ghostInteractable : ''
      ),
    };
  },
  avatar: {
    root: 'h-8 w-8',
  },
  inputtext: {
    root: classNames(
      focus,
      ghost,
      'rounded-md border-input bg-transparent px-2 py-1 text-sm transition-colors placeholder:font-light placeholder:text-muted-foreground'
    ),
  },
  card: {
    root: 'p-6 border rounded-lg shadow-sm',
    title: 'font-semibold text-2xl',
    subTitle: 'text-sm text-muted-foreground',
    content: 'mt-2',
  },
  calendar: {
    header: 'flex justify-between',
    title: 'text-sm flex gap-1',
    previousButton: classNames(btn, focus, ghostInteractable, 'text-muted-foreground w-7'),
    nextButton: classNames(btn, focus, ghostInteractable, 'text-muted-foreground w-7'),
    table: 'w-full mt-3',
    day: ({ props, context }) =>
      classNames(
        {
          'opacity-40': context.otherMonth,
          'cursor-pointer': !context.disabled,
        },
        context.today ? btn : '',
        context.today ? primaryInteractable : '',
        'text-center text-sm p-2'
      ),
    tableHeaderCell: 'text-center',
  },
  tabmenu: {
    menu: 'inline-flex bg-muted p-1 rounded-lg',
    action: ({ props, context }) =>
      classNames(
        btn,
        focus,
        props.activeIndex === context.index ? ghostInteractable : 'text-muted-foreground',
        props.activeIndex === context.index ? 'bg-background' : 'text-muted-foreground',
        'px-3'
      ),
  },
  toast: {
    root: classNames('w-96'),
    message: ({ state, index }) => ({
      className: classNames('mb-4 rounded-md w-full shadow-lg p-6', {
        'bg-white border': state.messages[index] && state.messages[index].message.severity == 'info',
        'bg-green-100 border-solid border-0 border-l-4 border-green-500 text-green-700':
          state.messages[index] && state.messages[index].message.severity == 'success',
        'bg-orange-100 border-solid border-0 border-l-4 border-orange-500 text-orange-700':
          state.messages[index] && state.messages[index].message.severity == 'warn',
        'bg-red-100 border-solid border-0 border-l-4 border-red-500 text-red-700':
          state.messages[index] && state.messages[index].message.severity == 'error',
      }),
    }),
    content: 'flex items-center',
    icon: 'hidden',
    text: 'flex-1 text-sm text-muted-foreground',
    summary: 'font-semibold text-primary',
    closeButton: classNames(btn, focus, ghostInteractable, 'text-muted-foreground'),
    transition: {
      timeout: { enter: 300, exit: 500 },
      classNames: {
        enter: 'opacity-0 max-h-0 translate-x-0 translate-y-2/4 translate-z-0',
        enterActive: '!max-h-40 !opacity-90 !translate-y-0 transition-transform transition-opacity duration-300',
        exit: 'max-h-40 opacity-90',
        exitActive: '!max-h-0 !opacity-0 !mb-0 overflow-hidden transition-all duration-500 ease-in',
      },
    },
  },
  tag: {
    root: ({ props }) =>
      classNames(primaryInteractable, 'pointer-events-none px-2 py-1 rounded-md text-xs flex items-center justify-center', {
        'rounded-full': props.rounded,
      }),
  },
  chip: {
    root: classNames(btn, ghost, 'bg-muted inline-flex gap-2 py-1 rounded-full'),
    removeIcon: 'transition-colors text-muted-foreground hover:text-primary',
  },
  dialog: {
    root: ({ state }) =>
      classNames('rounded-lg shadow-lg border', 'max-h-[90%] transform scale-100', 'm-0 w-[50vw] bg-background p-6', {
        'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': state.maximized,
      }),
    header: 'flex items-center justify-between shrink-0',
    headerTitle: 'text-lg font-semibold',
    headerIcons: 'flex items-center',
    closeButton: classNames(btn, ghostInteractable),
    footer: 'flex gap-2 shrink-0 justify-end align-center',
    mask: ({ state }) => ({
      className: classNames('transition duration-200', { 'bg-background/80 backdrop-blur-sm': state.containerVisible }),
    }),
    transition: ({ props }) => {
      return {
        timeout: 200,
        classNames:
          props.position === 'top'
            ? {
                enter: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
                enterActive: '!opacity-100 !scale-100 !translate-y-0 transition-all duration-200 ease-out',
                exit: 'opacity-100 scale-100 transition-all duration-200 ease-out',
                exitActive: '!opacity-0 !scale-75 translate-x-0 -translate-y-full translate-z-0',
              }
            : props.position === 'bottom'
            ? {
                enter: 'opacity-0 scale-75 translate-y-full',
                enterActive: '!opacity-100 !scale-100 !translate-y-0 transition-all duration-200 ease-out',
                exit: 'opacity-100 scale-100 transition-all duration-200 ease-out',
                exitActive: '!opacity-0 !scale-75 translate-x-0 translate-y-full translate-z-0',
              }
            : props.position === 'left' || props.position === 'top-left' || props.position === 'bottom-left'
            ? {
                enter: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
                enterActive: '!opacity-100 !scale-100 !translate-x-0 transition-all duration-200 ease-out',
                exit: 'opacity-100 scale-100 transition-all duration-200 ease-out',
                exitActive: '!opacity-0 !scale-75 -translate-x-full translate-y-0 translate-z-0',
              }
            : props.position === 'right' || props.position === 'top-right' || props.position === 'bottom-right'
            ? {
                enter: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                enterActive: '!opacity-100 !scale-100 !translate-x-0 transition-all duration-200 ease-out',
                exit: 'opacity-100 scale-100 transition-all duration-200 ease-out',
                exitActive: '!opacity-0 !scale-75 translate-x-full translate-y-0 translate-z-0',
              }
            : {
                enter: 'opacity-0 scale-75',
                enterActive: '!opacity-100 !scale-100 transition-all duration-200 ease-out',
                exit: 'opacity-100 scale-100 transition-all duration-200 ease-out',
                exitActive: '!opacity-0 !scale-75',
              },
      };
    },
  },
  sidebar: {
    root: ({ props }) => ({
      className: classNames('flex flex-col relative transform relative', 'bg-white shadow-lg border', {
        '!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': props.fullScreen,
        'h-full w-80': props.position == 'left' || props.position == 'right',
        'h-40 w-full': props.position == 'top' || props.position == 'bottom',
      }),
    }),
    header: {
      className: classNames('flex items-center justify-end', 'p-6'),
    },
    closeButton: {
      className: classNames(btn, ghostInteractable),
    },
    // closeButtonIcon: 'w-4 h-4 inline-block',
    content: {
      className: classNames('p-6 pt-0 h-full w-full', 'grow overflow-y-auto'),
    },
    mask: ({ state }) => ({
      className: classNames('transition duration-200', { 'bg-background/80 backdrop-blur-sm': state.containerVisible }),
    }),
    transition: ({ props }) => {
      return {
        timeout: 300,
        classNames: props.fullScreen
          ? {
              enter: 'opacity-0',
              enterActive: '!opacity-100 transition-opacity duration-300 ease-in',
              exit: 'opacity-100 transition-opacity duration-300 ease-in',
              exitActive: '!opacity-0',
            }
          : props.position === 'top'
          ? {
              enter: 'translate-x-0 -translate-y-full translate-z-0',
              enterActive: '!translate-y-0 transition-transform duration-300',
              exit: 'translate-y-0 transition-transform duration-300',
              exitActive: 'translate-x-0 !-translate-y-full translate-z-0',
            }
          : props.position === 'bottom'
          ? {
              enter: 'translate-x-0 translate-y-full translate-z-0',
              enterActive: '!translate-y-0 transition-transform duration-300',
              exit: 'translate-y-0 transition-transform duration-300',
              exitActive: 'translate-x-0 !translate-y-full translate-z-0',
            }
          : props.position === 'left'
          ? {
              enter: '-translate-x-full translate-y-0 translate-z-0',
              enterActive: '!translate-x-0 transition-transform duration-300',
              exit: 'translate-x-0 transition-transform duration-300',
              exitActive: '!-translate-x-full translate-y-0 translate-z-0',
            }
          : props.position === 'right'
          ? {
              enter: 'translate-x-full translate-y-0 translate-z-0',
              enterActive: '!translate-x-0 transition-transform duration-300',
              exit: 'translate-x-0 transition-transform duration-300',
              exitActive: '!translate-x-full translate-y-0 translate-z-0',
            }
          : undefined,
      };
    },
  },
  // button: {
  //   root: ({ props, context }: any) => ({
  //     className: classNames(
  //       'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom bg-red-500'
  //     ),
  //   }),
  // },
};
