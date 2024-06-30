import { HiMiniPlusCircle } from 'react-icons/hi2';

function EmptyPanelInfo({ title }) {
  return (
    <div className="flex h-full   items-center justify-center">
      <div className="mx-auto flex max-w-6xl flex-col items-center pt-56 pb-4">
        <HiMiniPlusCircle className="h-12 w-12 text-blue-700" />
        <p className="font-medium capitalize text-blue-700">
          Please add some {title} to Start
        </p>
      </div>
    </div>
  );
}

export default EmptyPanelInfo;
