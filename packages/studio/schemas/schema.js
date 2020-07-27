import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import generalSettings from "./documents/generalSettings";
import route from "./documents/route";
import page from "./documents/page";

export default createSchema({
  name: "website",
  types: schemaTypes.concat([generalSettings, route, page]),
});
