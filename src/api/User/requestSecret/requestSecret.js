import { generateSecret, sendSecretMail } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;
      console.log(email);
      const loginSecret = generateSecret();
      try {
        console.log(loginSecret);
        //await sendSecretMail(email, loginSecret);
        await prisma.updateUser({ data: { loginSecret }, where: { email } });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
