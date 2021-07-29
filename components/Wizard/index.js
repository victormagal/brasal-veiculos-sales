import { 
  CheckCircleIcon,
  MinusCircleIcon
 } from '@heroicons/react/outline';

export default function Wizard() {
  return (
    <div className="flex">
      <div className="bg-blue flex items-center p-5 text-white w-1/4">
        <CheckCircleIcon width={24} height={24} className='text-white' />
        <span className="font-sans ml-4 text-md text-white">Passo 01</span>
      </div>
      <div className="bg-blue flex items-center text-white p-5 w-1/4">
        <CheckCircleIcon width={24} height={24} className='text-white' />
        <span className="font-sans ml-4 text-md text-white">Passo 02</span>
      </div>
      <div className="bg-blue flex items-center p-5 w-1/4">
        <MinusCircleIcon width={24} height={24} className='text-white' />
        <span className="font-sans ml-4 text-md text-white">Passo 03</span>
      </div>
      <div className="bg-gray-50 flex items-center-5 p-5 w-1/4">
        <MinusCircleIcon width={24} height={24} className='text-gray-500' />
        <span className="font-sans ml-4 text-md text-gray-500">Passo 04</span>
      </div>
    </div>
  );
}
