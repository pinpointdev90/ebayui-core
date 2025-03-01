import Readme from './README.md';
import Component from './examples/01-program-badges/template.marko';
import code from './examples/01-program-badges/template.marko?raw';

const Template = (args) => ({
    input: {
        ...args,
        renderBody: args.renderBody
            ? (out) => {
                  out.html(args.renderBody);
              }
            : null,
    },
});

export default {
    title: 'ebay-program-badges',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {},
};

export const Standard = Template.bind({});
Standard.args = {};
Standard.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
