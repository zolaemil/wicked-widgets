jest.mock('../store');
const mockStore = require('../store');

const {
  post: postHandler,
  getOne: getOneHandler,
} = require('../handlers');

describe('Widget API', () => {
  describe('GET /widgets/:id', () => {
    test('returns the widget - assuming it exists', () => {
      const mockRequest = {
        params: {
          id: 'foo',
        },
      }
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

      mockStore.findById.mockReturnValue(fakeWidget);

      const mockResponse = {
        send: jest.fn(),
      };

      getOneHandler(mockRequest, mockResponse);

      expect(mockResponse.send.mock.calls[0][0]).toEqual(fakeWidget);
    });
    test('returns the widget - assuming it does not exist', () => {});
  });

  describe('POST /widgets', () => {
    test('returns a new widget', () => {
      const payload = {
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

      const mockRequest = {
        body: payload,
      }
      const mockResponse = {
        send: jest.fn(),
      };

      postHandler(mockRequest, mockResponse);
      // const expextedOutputPayload = { ...payload };

      expect(mockResponse.send.mock.calls[0][0]).toEqual(payload);

      // assert that it returns a new object
    });
  });
});