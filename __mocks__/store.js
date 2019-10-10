const fakeWidget = {
  id: 'foo',
  colors: {
    brandColor1: '#000000',
    brandColor2: '#000000',
    brandColor1Text: '#000000',
    brandColor2Text: '#000000',
    headerColor: '#000000',
    lightText: '#000000',
    darkText: '#000000',
    entryPointBackground: '#000000',
  },
  companyName: 'Foo',
  welcomeMessage: 'Bar',
};

module.exports = {
  findById: jest.fn().mockReturnValue(fakeWidget),
}