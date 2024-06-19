// import { cn } from "@/lib/utils";
// import Marquee from "@/components/magicui/marquee";
// import AvatarUser from "../avatarUser";
// import useFetchAllComments from "@/lib/hooks/useFetchAllComments";

// const ReviewCard = ({
//   user_id,
//   comment,
//   created_at, // ISO date string
//   name,
//   lastname,
//   email,
// }: {
//   user_id?: string;
//   comment: string;
//   created_at?: string | Date | number; // ISO date string
//   name?: string;
//   lastname?: string;
//   email?: string;
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <AvatarUser namedefault={`${name} ${lastname}`} />

//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {`${name} ${lastname}`}
//           </figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{email}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{comment}</blockquote>
//     </figure>
//   );
// };

// const MarqueeComment = () => {
//   const [comments, loading] = useFetchAllComments();

//   if (loading) {
//     return <div>Loading...</div>; // Or a spinner or skeleton screen
//   }

//   const firstRow = comments.slice(0, Math.ceil(comments.length / 2));
//   const secondRow = comments.slice(Math.ceil(comments.length / 2));

//   return (
//     <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-card">
//       <Marquee pauseOnHover className="[--duration:20s]">
//         {firstRow.map((review) => (
//           <ReviewCard key={review.email} {...review} />
//         ))}
//       </Marquee>
//       <Marquee reverse pauseOnHover className="[--duration:20s]">
//         {secondRow.map((review) => (
//           <ReviewCard key={review.email} {...review} />
//         ))}
//       </Marquee>
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
//     </div>
//   );
// };

// export default MarqueeComment;

// // import { cn } from "@/lib/utils";
// // import Marquee from "@/components/magicui/marquee";
// // import AvatarUser from "../avatarUser";
// // import { fetchAllComments } from "@/lib/functions/data";
// // const reviews = async () => await fetchAllComments();

// // const firstRow = reviews.slice(0, reviews.length / 2);
// // const secondRow = reviews.slice(reviews.length / 2);

// // const ReviewCard = ({
// //   comment,
// //   name,
// //   lastname,
// //   email,
// // }: {
// //   comment: string;
// //   name: string;
// //   lastname: string;
// //   email: string;
// // }) => {
// //   return (
// //     <figure
// //       className={cn(
// //         "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
// //         // light styles
// //         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
// //         // dark styles
// //         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
// //       )}
// //     >
// //       <div className="flex flex-row items-center gap-2">
// //         <AvatarUser namedefault={`${name} ${lastname}`} />

// //         <div className="flex flex-col">
// //           <figcaption className="text-sm font-medium dark:text-white">
// //             {`${name} ${lastname}`}
// //           </figcaption>
// //           <p className="text-xs font-medium dark:text-white/40">{email}</p>
// //         </div>
// //       </div>
// //       <blockquote className="mt-2 text-sm">{comment}</blockquote>
// //     </figure>
// //   );
// // };

// // const MarqueeComment = () => {
// //   return (
// //     <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-card">
// //       <Marquee pauseOnHover className="[--duration:20s]">
// //         {firstRow.map((review) => (
// //           <ReviewCard key={review.email} {...review} />
// //         ))}
// //       </Marquee>
// //       <Marquee reverse pauseOnHover className="[--duration:20s]">
// //         {secondRow.map((review) => (
// //           <ReviewCard key={review.email} {...review} />
// //         ))}
// //       </Marquee>
// //       <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
// //       <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
// //     </div>
// //   );
// // };

// // export default MarqueeComment;
// // // comment: 'The website is very user-friendly and intuitive.',
// // //     name: 'John',
// // //     lastname: 'Doe',
// // //     email: 'john.doe@example.com'
