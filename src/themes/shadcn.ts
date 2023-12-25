import type { PrimeReactPTOptions } from 'primereact/api';
import { classNames } from 'primereact/utils';

const btn: string = 'flex gap-2 items-center justify-center rounded-md text-sm transition-colors p-2 whitespace-nowrap';

const pressable: string =
  'relative before:absolute before:content-[""] before:w-full before:h-full before:hover:bg-white/20 before:top-0 before:left-0 before:rounded-md';

export default {
  button: {
    root: ({ props }: any) =>
      classNames(
        btn,
        pressable,
        {
          'bg-primary text-white': !props.text,
        },
        'px-4'
      ),
    label: ({ props, ctx }: any) => {
      console.log(props);
      return classNames({
        hidden: props.icon && !props.label,
      });
    },
  },
} as PrimeReactPTOptions;
