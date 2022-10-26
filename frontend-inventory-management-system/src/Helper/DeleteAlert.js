import logo from "../../src/Asset/Img/logo.svg";
import { toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SuccessToast } from "./FormHelper";
const bounce = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck",
  appendPosition: false,
});

// ! Delete Single Ads
const DeleteAlert = ({
  closeToast,
  toastProps,
  Id,
  Text,
  deleteRequestAPI,
  nextReturnRequestAPI,
}) => (
  <div>
    <div>
      <div className='w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-[#374151] '>
        <div className=''>
          <div className='text-center p-5 flex-auto justify-center'>
            <span>
              <img src={logo} alt='' className='inline-block ' />
            </span>
            <h2 className='text-xl text-white font-bold py-4 '>
              Are you sure?
            </h2>
            <p className='text-sm text-white px-8'>{Text}</p>
          </div>
          <div className='p-3  mt-2 text-center space-x-4 md:block'>
            <button
              onClick={closeToast}
              className='mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100'
            >
              Cancel
            </button>
            <button
              onClick={() =>
                confirmDeleteAds(Id, deleteRequestAPI, nextReturnRequestAPI)
              }
              className='mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const DeleteItems = (
  id,
  text,
  deleteRequestAPI,
  nextReturnRequestAPI
) => {
  toast(
    <DeleteAlert
      Id={id}
      Text={text}
      deleteRequestAPI={deleteRequestAPI}
      nextReturnRequestAPI={nextReturnRequestAPI}
    />,
    {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      transition: bounce,
    }
  );
};

const confirmDeleteAds = (Id, deleteRequestAPI, nextReturnRequestAPI) => {
  deleteRequestAPI(Id).then((res) => {
    if (res === true) {
      SuccessToast("Account Delete Successful.");
      nextReturnRequestAPI(1, "10", "0");
    }
  });
  toast.dismiss();
};

// ! Delete Single Profile
// export const DeleteProfileAlert = ({
//   closeToast,
//   toastProps,
//   profileEmail,
// }) => (
//   <div>
//     <div>
//       <div className='w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-[#374151] '>
//         <div className=''>
//           <div className='text-center p-5 flex-auto justify-center'>
//             <span>
//               <img src={logo} alt='' className='inline-block ' />
//             </span>
//             <h2 className='text-xl text-white font-bold py-4 '>
//               Are you sure?
//             </h2>
//             <p className='text-sm text-white px-8'>
//               Do you really want to delete your account? This process cannot be
//               undone
//             </p>
//           </div>
//           <div className='p-3  mt-2 text-center space-x-4 md:block'>
//             <button
//               onClick={closeToast}
//               className='mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100'
//             >
//               Cancel
//             </button>
//             <button
//               onClick={() => confirmDeleteProfile(profileEmail)}
//               className='mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600'
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export const DeleteUser = (email) => {
//   toast(<DeleteProfileAlert profileEmail={email} />, {
//     position: "top-center",
//     autoClose: false,
//     hideProgressBar: true,
//     closeOnClick: false,
//     pauseOnHover: true,
//     draggable: false,
//     progress: undefined,
//     transition: bounce,
//   });
// };

// const confirmDeleteProfile = (profileEmail) => {
//     delete__user__Profile_Request__API(profileEmail).then((res) => {
//       if (res === true) {
//         Get_All_User_API(1);
//       }
//     });

//   toast.dismiss();
// };

// ! Delete Single Ads By Admin
// export const DeleteSingleAdsByAdminJSX = ({
//   closeToast,
//   toastProps,
//   adsId,
//   pageNoData,
// }) => (
//   <div>
//     <div>
//       <div className='w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-[#374151] '>
//         <div className=''>
//           <div className='text-center p-5 flex-auto justify-center'>
//             <span>
//               <img src={logo} alt='' className='inline-block ' />
//             </span>
//             <h2 className='text-xl text-white font-bold py-4 '>
//               Are you sure?
//             </h2>
//             <p className='text-sm text-white px-8'>
//               Do you really want to delete your account? This process cannot be
//               undone
//             </p>
//           </div>
//           <div className='p-3  mt-2 text-center space-x-4 md:block'>
//             <button
//               onClick={closeToast}
//               className='mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100'
//             >
//               Cancel
//             </button>
//             <button
//               onClick={() => confirmDeleteAdsByAdmin(adsId, pageNoData)}
//               className='mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600'
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export const DeleteSingleAdsByAdmin = (id, pageNo) => {
//   toast(<DeleteSingleAdsByAdminJSX adsId={id} pageNoData={pageNo} />, {
//     position: "top-center",
//     autoClose: false,
//     hideProgressBar: true,
//     closeOnClick: false,
//     pauseOnHover: true,
//     draggable: false,
//     progress: undefined,
//     transition: bounce,
//   });
// };

// const confirmDeleteAdsByAdmin = (adsId, pageNoData) => {
//   delete__single_user__ads_Request__API(adsId).then((res) => {
//     if (res === true) {
//       SuccessTost("Ads Delete Successful.");
//       All__ads__Pagination__Request__API(pageNoData);
//     }
//   });

//   toast.dismiss();
// };
