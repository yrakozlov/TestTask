// import { useEffect, useRef } from "react";

// export const useScroll = (perentRef, childRef, callback) => {
//   const observer = useRef();

//   useEffect(() => {
//     const options = {
//       root: perentRef.current,
//       rootMargin: "0px",
//       threshold: 0,
//     };

//     observer.current = new IntersectionObserver(([target]) => {
//       if (target.isIntersecting) {
//         callback();
//       }
//     }, options);
//     observer.current.observe(childRef.current)
//     return function () {
//       observer.current.unobserve(childRef.current)
//     }
//   }, [callback]);
// };
