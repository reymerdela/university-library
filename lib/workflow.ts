import { Client as WorkflowClient } from "@upstash/workflow";
import { Client as QStashClient, resend } from "@upstash/qstash";
import config from "./config";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

const qstashClient = new QStashClient({
  token: config.env.upstash.qstashToken,
});

type Email = {
  email: string;
  subject: string;
  message: string;
};

export const sendEmail = async ({ email, subject, message }: Email) => {
  return await qstashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: config.env.resendToken }),
    },
    body: {
      from: "Reymer <mail@hello.reymerdev.me>",
      to: [email],
      subject: subject,
      html: message,
    },
  });
};
