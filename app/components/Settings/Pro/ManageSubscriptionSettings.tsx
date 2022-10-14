import {Badge, Box, Button, Group, Paper, SegmentedControl, Stack, Text, Title} from "@mantine/core";
import {upperFirst} from "@mantine/hooks";
import {useState} from "react";
import {useFetcher, useLoaderData, useNavigate} from "@remix-run/react";
import usePaddle from "~/hooks/usePaddle";
import {useUser} from "~/utils/utils";
import type {loader} from "~/routes/settings/pro";
import dayjs from "dayjs";

const plans: Record<string, string> = {
  "26607": "daily",
  "26608": "monthly",
  "26609": "yearly"
};

const planPrices: Record<string, string> = {
  "26607": "1$/day",
  "26608": "24$/month",
  "26609": "230$/year"
};

export const ManageSubscriptionSettings = () => {
  const {payment, userSubscription} = useLoaderData<typeof loader>()
  const navigate = useNavigate()
  const fetcher = useFetcher()

  console.log("userSubscription", userSubscription)

  const {paddle} = usePaddle({environment: "sandbox", vendor: 3808});

  const checkoutComplete = (data: any) => {
    console.log("data", data);
    console.log("data", data.checkout.completed);

    if (data.checkout.completed) {
      navigate("/payment/unsubscribed");
    }
  };

  const checkoutClosed = (data: any) => {
    console.log("checkoutClosed", data);
  };

  const handleCancelSubscription = () => {
    paddle.Checkout.open({
      override: userSubscription.cancel_url,
      successCallback: checkoutComplete,
      closeCallback: checkoutClosed
    })
  }

  const handleUpdateSubscription = () => {
    paddle.Checkout.open({
      override: userSubscription.update_url,
      successCallback: checkoutComplete,
      closeCallback: checkoutClosed
    })
  }


  return (
    <Paper shadow="0" withBorder mb={12}>
      <Box p={"lg"}>
        <Title order={2}>Manage pro settings</Title>
        <Text color={"dimmed"}>Current plan: <Badge color={"gray"}>{plans[String(userSubscription.plan_id)]}</Badge></Text>
        <Box my={12}>
          {userSubscription.state === "deleted" ? (
            <Text>Subscription canceled, but active until <Badge color={"emerald"}>{dayjs(payment?.subscriptionEndDate).format("MMMM D, YY")}</Badge></Text>
            ) : (
            <Text>Next payment: <Badge color={"emerald"}>{dayjs(userSubscription?.next_payment?.date).format("MMMM D, YY")}</Badge></Text>
          )}

        </Box>
        <Box py={12}>
          {userSubscription.state === "deleted" ? (
            <Text>You can subscribe again when current subscription expires</Text>
            ) : (
            <fetcher.Form method={"post"}>
              <Group mt={12}>
                <Button
                  color={"emerald"}
                  onClick={handleUpdateSubscription}
                >
                  Update subscription
                </Button>
                <Button
                  color={"red"}
                  onClick={handleCancelSubscription}
                >
                  Cancel subscription
                </Button>
              </Group>
            </fetcher.Form>
          )}

        </Box>
      </Box>

    </Paper>
  )
}
