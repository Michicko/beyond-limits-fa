import Calendar from "@/components/main/Calendar/Calendar";
import Flex from "@/components/main/Container/Flex";
import CompetitionsLayout from "@/components/main/Layouts/CompetitionsLayout/CompetitionsLayout";
import MatchCard from "@/components/main/MatchCard/MatchCard";
import { matches } from "@/lib/placeholder-data";
import React, { Suspense } from "react";

function Results() {
  return (
    <CompetitionsLayout pageTitle="Results">
      <>
        <Suspense fallback={null}>
          <Calendar />
        </Suspense>
        <Flex align="center" justify="between" direction="col" gap="sm" my="lg">
          {matches
            .filter((el) => el.status === "FINISHED")
            .map((match) => {
              return (
                <MatchCard
                  match={match}
                  showName={true}
                  theme="light"
                  key={match.id}
                  iconSize="xl"
                />
              );
            })}
        </Flex>
      </>
    </CompetitionsLayout>
  );
}

export default Results;
