jest.mock('../store');
const mockStore = require('../store');
const uuid = require('uuid');

const {
  post: postHandler,
  getOne: getOneHandler,
  update: patchHandler,
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

    test('returns the widget - assuming it does not exist', () => {
      const mockRequest = {
        params: {
          id: 'foo',
        },
      }

      mockStore.findById.mockReturnValue(undefined);

      const mockSend = jest.fn();
      const mockStatus = jest.fn().mockReturnValue({ send: mockSend });
      const mockResponse = {
        status: mockStatus,
      };

      getOneHandler(mockRequest, mockResponse);

      expect(mockStatus.mock.calls[0][0]).toEqual(404);
      expect(mockSend.mock.calls[0][0]).toEqual('No such widget');
      // console.log(mockResponse.send.mock.calls[0][0]);
    });
  });

  describe('PATCH /widgets/:id', () => {
    test('updates the widget - assuming it exists', () => {
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
        params: {
          id: uuid.v4(),
        },
        body: payload,
      }

      const fakeWidget = { id: mockRequest.params.id, ...payload };
      mockStore.update.mockReturnValue(fakeWidget);

      const mockResponse = {
        send: jest.fn(),
      };

      patchHandler(mockRequest, mockResponse);

      // expect that store.update is called with the id and payload
      expect(mockResponse.send.mock.calls[0][0]).toEqual(fakeWidget);
    });

    test('updates the widget - assuming it does not exists', () => {
      const mockRequest = {
        params: {
          id: uuid.v4(),
        },
        body: {},
      }

      mockStore.update.mockReturnValue(undefined);

      const mockSend = jest.fn();
      const mockStatus = jest.fn().mockReturnValue({ send: mockSend });
      const mockResponse = {
        status: mockStatus,
      };

      patchHandler(mockRequest, mockResponse);

      expect(mockStatus.mock.calls[0][0]).toEqual(404);
      expect(mockSend.mock.calls[0][0]).toEqual('No such widget');
    });
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

      const fakeWidget = { id: uuid.v4(), ...payload};
      mockStore.add.mockReturnValue(fakeWidget);

      const mockResponse = {
        send: jest.fn(),
      };

      postHandler(mockRequest, mockResponse);

      expect(mockResponse.send.mock.calls[0][0]).toEqual(fakeWidget);
    });
  });
});