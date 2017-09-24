# dom-get

A tiny utility for selecting DOM elements and adding event listeners. It uses a jQuery like syntax. Super basic.

## Install

You can include it directly in the browser:

```
<script src="dom-get.js"></script>
```

Or install it with npm:

```
npm install dom-get
```

## Usage

```
dom('button').on('click', function(event) {
    // do something
});
```

`dom` returns an array that has the following functions available:

`on` - takes and event name to add and a callback, adds an event listener to each element in the array.
`off` - takes an event name, removes that event from each element in the array.
`hide` - adds `display: none` as an inline style to each element in the array.
`show` - removes the `display` style from each element in the array.
`first` - slices the array to contain only the first element.
`last` - slices the array to contain only the last element.