import { storiesOf } from "@storybook/react";
import React from "react";

import Welcome from "./pages/welcome.stories";
import ButtonStories from "./components/Buttons.stories";
import AccordionStories from "./components/Accordion.stories";
import DropdownStories from "./components/Dropdown.stories";
import BreadcrumbStories from "./components/Breadcrumb.stories"

import buttonNotes from "./notes/components/buttons.md";
import welcomeNotes from "./notes/welcome.md";
import accordionNotes from "./notes/components/accordions.md";

storiesOf("Welcome", module).add("Introduction", () => <Welcome></Welcome>, {
  notes: { markdown: welcomeNotes }
});

storiesOf("Components", module)
  .add("Accordions", () => <AccordionStories />, {
    notes: { markdown: accordionNotes }
  })
  .add("Buttons", () => <ButtonStories />, {
    notes: { markdown: buttonNotes }
  })
  .add("Dropdowns", () => <DropdownStories />)
  .add("Breadcrumbs",()=><BreadcrumbStories/>);
