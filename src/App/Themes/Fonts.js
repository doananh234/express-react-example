
const type = {
  base: 'Roboto-regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
  bolditalic: 'roboto-regular',
  emphasis: 'roboto-regular',
}

const scale = 1;

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 10,
  navTitle: 17
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6,
    fontWeight: '300'
  },
  regular: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  thin: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  drawer: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  note: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  bold: {
    fontFamily: type.bold,
    fontSize: size.regular,

  },
  header: {
    fontFamily: type.bold,
    fontSize: size.h6,
  }
}

export default {
  type,
  size,
  style
}

