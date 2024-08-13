"use client";
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

const SurveyComponent: React.FC = () => {
  const surveyJson = {
    title: "Product Feedback Survey",
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            name: "satisfaction",
            title: "How satisfied are you with our product?",
            isRequired: true,
            choices: [
              "Very Satisfied",
              "Satisfied",
              "Neutral",
              "Dissatisfied",
              "Very Dissatisfied",
            ],
          },
          {
            type: "comment",
            name: "suggestions",
            title: "What can we do to improve?",
          },
        ],
      },
    ],
  };

  const survey = new Model(surveyJson);

  survey.onComplete.add((sender) => {
    console.log("Survey results: ", sender.data);
  });

  return <Survey model={survey} />;
};

export default SurveyComponent;
