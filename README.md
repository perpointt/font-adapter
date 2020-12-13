# font-adapter

## Инициализация:
html:
```
<div id="adapter">
      <div class="options">
          <input type="range" value="0" min="0" max="100" data-range="size" />
          <input
            type="range"
            value="0"
            min="0"
            max="100"
            data-range="spacing"
          />
          <input type="range" value="0" min="0" max="100" data-range="height" />
        <select data-range="font">
          <option value="Roboto">Roboto</option>
          <option value="Noto-Sans">Noto-Sans</option>
        </select>
      </div>
      <textarea class="js-adapter-textarea"></textarea>
    </div>
...
    <script src="font-adapter.js"></script>
```
js:
```
  const adapter = new FontAdapter({
      container: '#adapter', //div elem
      text: 'example text, use propery textareaText to change it', //string
      sansSerif: false, //bool
  });
```
