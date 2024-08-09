import { useRef } from 'react';
import Modal from 'react-responsive-modal';

// type ApplyJobModalProps = {
//   isOpen: boolean;
//   onToggleApplyJobModal: () => void;
// };

// export default function ApplyJobModal({
//   isOpen,
//   onToggleApplyJobModal,
// }: ApplyJobModalProps) {
//   const form = useRef<HTMLFormElement>(null);

//   return (
//     <div>
//       <Modal
//         open={isOpen}
//         onClose={onToggleApplyJobModal}
//         center
//         classNames={{
//           overlay: 'customOverlay',
//           modal: 'customModal',
//         }}>
//         <h2 className={'text-3xl font-bold'}>Apply a Job</h2>
//         <div className='flex flex-col items-center max-md:bg-black-white md:bg-[#f3f3f4] xl:bg-white-gray-white p-2'>
//           <form ref={form} onSubmit={() => {}} className={'w-full'}>
//             <div className='grid grid-cols-1 gap-4'>
//               <div className={'w-full'}>
//                 <input
//                   type='text'
//                   name='user_name'
//                   placeholder='Name'
//                   className='w-full p-3 m-2 text-black md:mt-4 focus:outline-none'
//                   required
//                 />
//               </div>

//               <div className={'w-full'}>
//                 <input
//                   type='text'
//                   placeholder='email'
//                   name='user_email'
//                   className='w-full p-3 m-2 text-black md:mt-4 focus:outline-none'
//                   required
//                 />
//               </div>

//               <div className={'w-full'}>
//                 <input
//                   type='number'
//                   placeholder='Phone number'
//                   name='user_email'
//                   className='w-full p-3 m-2 text-black md:mt-4 focus:outline-none'
//                   required
//                 />
//               </div>

//               <div className={'w-full'}>
//                 <input
//                   type='number'
//                   placeholder='Which job you want to apply?'
//                   name='user_email'
//                   className='w-full p-3 m-2 text-black md:mt-4 focus:outline-none'
//                   required
//                 />
//               </div>

//               <div className={'w-full'}>
//                 <input
//                   type='text'
//                   placeholder='message'
//                   name='user_email'
//                   className='w-full p-4 m-2 text-black md:mt-4 focus:outline-none'
//                   required
//                 />
//               </div>

//               <button
//                 type='submit'
//                 value='Send'
//                 className='px-2 py-2 mt-2 text-white bg-orange-600 hover:bg-black-700'>
//                 Apply Job
//               </button>
//             </div>
//             {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//           <input
//             type="email"
//             name="user_name"
//             placeholder="email"
//             className="p-3 m-2 text-black md:mt-4 focus:outline-none"
//           />

//           <input
//             type="text"
//             placeholder="job decription"
//             name="user_email"
//             className="p-3 m-2 text-black md:mt-4 focus:outline-none"
//           />
//         </div> */}

//             {/* <textarea
//           name="message"
//           placeholder="Message"
//           className="h-32 w-[96%] col-span-1 p-2 m-2 text-black md:mt-4 md:col-span-2 focus:outline-none"
//         />
//         <button
//           type="submit"
//           value="Send"
//           className="px-4 py-2 mt-4 text-white bg-orange-600 md:mt-4 hover:bg-black-700"
//         >
//           Send Message
//         </button> */}
//             {/* <button
//              type='submit'
//              className='px-4 py-2 mt-4 text-white bg-orange-600 md:mt-4 hover:bg-orange-700'>
//              Send Message
//            </button> */}
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// }
