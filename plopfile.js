const componentTypes = [
  {
    label: 'UI',
    templateFile: 'plop-templates/component/ui-component.hbs',
  },
  {
    label: 'Pages',
    templateFile: 'plop-templates/component/page-component.hbs',
    path:
      'src/app/components/{{kebabCase type}}/{{kebabCase name}}/page-{{kebabCase name}}.jsx',
    map: (data) => {
      data.name = `page ${data.name}`;
    },
  },
];

const generateChoices = (types) => types.map((type) => type.label);

module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'Create new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Component type',
        choices: generateChoices(componentTypes),
      },
      {
        type: 'confirm',
        name: 'translation',
        message: 'Support translations?',
      },
    ],
    actions: (data) => {
      const type = componentTypes.find((type) => type.label === data.type);
      if (type.map) {
        type.map(data);
      }
      return [
        {
          type: 'add',
          path:
            'src/app/components/{{kebabCase type}}/{{kebabCase name}}/{{kebabCase name}}.jsx',
          templateFile: type.templateFile,
        },
        {
          type: 'add',
          path:
            'src/app/components/{{kebabCase type}}/{{kebabCase name}}/index.js',
          templateFile: 'plop-templates/component/index.hbs',
        },
        {
          type: 'add',
          path:
            'src/app/components/{{kebabCase type}}/{{kebabCase name}}/{{kebabCase name}}.scss',
          templateFile: 'plop-templates/component/style.hbs',
        },
      ];
    },
  });
};
