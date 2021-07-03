import moment from "moment";
export const PRODUCT_CODE = "AZ16002";
export const PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDI1G5cs33X/c7R\nKZPLBsONubBa6FnhbxIeMnxsfZunO0vJUvIpok/sr3Yf3Bql8VuqccLYJBpVYHYE\nM7H18E+uD1Bqfx+5fUpq+3ohWyoHTUxyzAeCYS9rZd441iapV+zKnQpeaCei+nMI\nNp2a3Fr+m8MHUeylCE1QbU+Q1RYL+Vmpo2GjSx58NuIGBS5ADwFjIz9VjcD7QfZ5\nGScI2wCztLCg6dzl9cIcRRKdP2Q0U62C5hRLZDBwrD4UZwc1diajb47BUgY5pgru\ne/B0YaA6alh9mhw7JbFocJ1VygcwZtjl/fUh9ZWzrP5/19xaDWbIXLsTIeEIuJKT\ne1tY/HaFAgMBAAECggEAA1TLaC69rjpCdrjk6nJ4MRmM1Gkzv81JmeYg/GS1/ay6\nXwJzoV9U9OUGhX9EvY7BbumYVOD+bdRIiN0kUnh0Ezv49myZkF2va720TX7XYDZ2\n8kAyT1uWKjF5oZbjHnPRVJ1iaWVQDlWaAwodjE7OP0MYAFRVI6SoXFE/3LQS0PaA\nPlYM4Xc/sgbABKX3lBCfAbx/n2o6IOjI2aiczup/oe9L0FhmkXrfZ24G+RDJzr8p\n+ybGfED5ZBTNYvDLs5qm8zK2sDkaI/AuvfM36KmsY6DgCNBcGf7iZKZ+TT4l/9Uu\n7lJtjQuO7OjRl2Dh7FnRX1jigBFmE5QX/4g8z6Wz2QKBgQD5QL2kz+Bnb71fvyKI\nuwnLZzIEZu3JKtoDEc/Q5LaEohRZ40cVjzsjsRvC14od1M55nQJTnJvGXCVvjWTc\nhSF74PXzC039OXC3uun39YC5AyZbHKeP+ZRXWqAq4ttA23S9i56dJcID1gKtC45P\nuRBDZUWf2T0y75bFPnC+rMEBrQKBgQDORCFxWMDtG6MzQPtb8LYRiTeJzaHmjUCV\nAQNTErPjXh6LJM8/i+zJUyNAP0dKXkVjtQsHL69wDXSfXyXPdYL8yRvZnwatZ4Ny\nS2JHBWdlfI5O5KHfUidY8mLvSGsd3Gi2nq3K6W83F1K2+8y+6RI9oA++bwBB7xiF\ndSuAB1hTOQKBgQCipEgbHzoCxLsBmyrhpYqCm1fb334R4lBX6Gt+l38xlMFK1i8w\nNkIUzCCdRx/sz0vbt0QpYuuSx9X1sIG8E3MB7o0OhrXhInYWrXS2RBA2qYOBuHTu\nUaEmTxBsa5M+AvVuKYjaaiTrc95TJFM8WjnugEqqP4rbjdMH6fKPuRJIEQKBgQDL\n8+4lh57sVOGgcmaY2IEPAeEar2ug7panPyMsZ1fcQFpvN2x95zuxLjWy917kmCaA\nmqlW573PTF6+n3RhmE526dxR6L7Pg4Uj5Io+s4czgF+ufr/YdAFYIAPXmoHgOuqH\neItcEknX7YXqTTx8oTVaHgSzRkq451QV0m+63ohlcQKBgQDMpEuCuIwk9/hDM1Kn\n1C7TNlP2FMHOAa9tVp8gnCx7oXl/1kAeHlkfYwVJqoJCNxVgkPmrwl4nkxA9KrBt\nd6Mjxk80S/mRUB8JiZAARFqNnbBJe7ULU9cwonHPuFklkSLF20CQd495uG1ufOm6\nr0U2HaZSwBByHk7UrOzjLB7k5w==\n-----END PRIVATE KEY-----\n";
export const CLIENT_EMAIL =
  "nam-chat-bot-page@nam-chat-bot-page.iam.gserviceaccount.com";
export const SPREADSHEET_ID = "1ansU7kouq8tYsEzxGenO82gcF3e6x27EmxPdLiGlYro";
export const SHEET_ID = "532038764";
export const userData = {
  name: "",
  phone_number: "",
  product_code: PRODUCT_CODE,
  quantity: 1,
  content: "",
  address: "",
  source_code: "",
  utm_link: "",
  time: moment(new Date()).format("DD/MM/YYYY h:mm:ss a"),
  domain: "",
  label: "",
  reference_id: "",
  form_id: "",
};
