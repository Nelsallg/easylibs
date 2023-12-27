# Paginator

The `paginator` function is a JavaScript function that helps in implementing pagination for a web application. It takes various options as input and handles the fetching of new data and updating the user interface accordingly.

### Installation

To use the `paginator` function, you need to include the following script in your HTML file:

```html
<script src="path/to/paginator.js"></script>
```

### Usage

The `paginator` function can be used by passing an object of options as its argument. The following options are available:

* `parentElement`: This is the HTML element that will contain the paginated content. It can be a string representing the ID of the element or the element itself.
* `skeletonLoading`: This is a string representing the HTML code that will be used to display a skeleton loading state while new data is being fetched.
* `callback`: This is a function that will be called with the response from the server and the HTML element that contains the paginated content. The function is responsible for updating the user interface with the new data.
* `csrfToken` (optional): This is a boolean value that indicates whether a CSRF token should be included in the request to the server. The default value is `false`.
* `margin` (optional): This is an object that specifies the margin (in pixels) around the element that will trigger the fetching of new data. The default value is `{ x: 0, y: 0 }`.

### Example

The following code shows how to use the `paginator` function to implement pagination for a list of products:

```javascript
paginator({
    parentElement: '#products',
    skeletonLoading: '<div class="skeleton-loading"></div>',
    callback: function(response, element) {
        // Update the user interface with the new data
        const products = response.data.products;
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const productElement = createProductElement(product);
            element.appendChild(productElement);
        }

        // Update the next page number
        element.dataset.nextPageNumber = response.data.next_page_number;
    },
    csrfToken: true,
    margin: { x: 0, y: 100 }
});
```

### How it works
