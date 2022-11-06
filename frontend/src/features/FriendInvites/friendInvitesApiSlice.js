import { apiSlice } from "../../app/api/apiSlice";

export const friendInvitesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendFriendInvitation: builder.mutation({
      query: (email) => ({
        url: "/friend-invitation",
        method: "POST",
        body: email,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("Query", data);
          // dispatch(logOut());
          // setTimeout(() => {
          //   dispatch(apiSlice.util.resetApiState());
          // }, 1000);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    // getPendingFriendInvites:

    rejectFriendInvitation: builder.mutation({
      query: (id) => ({
        url: "/friend-invitation/reject",
        method: "POST",
        body: id,
      }),
    }),

    acceptFriendInvitation: builder.mutation({
      query: (id) => ({
        url: "/friend-invitation/accept",
        method: "POST",
        body: id,
      }),
    }),
  }),
});

export const {
  useSendFriendInvitationMutation,
  useAcceptFriendInvitationMutation,
  useRejectFriendInvitationMutation,
} = friendInvitesApiSlice;
