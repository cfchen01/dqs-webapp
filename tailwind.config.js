const Lodash = require('lodash')
const config = require('@ej/ui/tailwind.config')

module.exports = Lodash.merge(config, {
  theme: {
    extend: {
      spacing: {
        'xs-dqs': '4px',
        'sm-dqs': '8px',
        'md-dqs': '12px',
        'lg-dqs': '16px',
        'xl-dqs': '20px',
        '2xl-dqs': '24px',
      },
      colors: {
        blue: {
          hover: '#ECF2FC',
        },
        gray: {
          line: '#f4f4f4',
        },
      },
      fontSize: {
        '4xl': `${24 / 14}rem`,
      },
      lineHeight: {
        // .leading-sm
        'sm': 24 / 12,
        'base': 24 / 14,
        'lg': 28 / 16,
        'xl': 28 / 18,
        '2xl': 32 / 20,
        '4xl': 36 / 24,
      },
      boxShadow: {
        dqs: '0 0 8px 0 rgba(0, 0,0, .1)',
      },
    },
  },
})
