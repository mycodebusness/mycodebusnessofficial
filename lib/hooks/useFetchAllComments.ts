// "use client";
// import { useEffect, useState } from "react";
// import { fetchAllComments } from "@/lib/functions/data";
// import { Comment } from "@/lib/definitions";

// const useFetchAllComments = (): [Comment[], boolean] => {
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadComments = async () => {
//       try {
//         const data = await fetchAllComments();
//         setComments(data);
//       } catch (error) {
//         console.error("Failed to fetch comments:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadComments();
//   }, []);

//   return [comments, loading];
// };

// export default useFetchAllComments;
