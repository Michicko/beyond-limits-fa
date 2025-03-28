import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "beyondLimitsFaMedia",
  access: (allow) => ({
    "media/*": [
      allow.guest.to(["read", "write", "delete"]),
      // allow.guest.to(["read"]),
      // allow.groups(["admin"]).to(["read", "write", "delete"]),
    ],
  }),
});
