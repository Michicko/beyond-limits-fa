"use client";
import React from "react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

function AwsInitialConfig() {
  return <></>;
}

export default AwsInitialConfig;
