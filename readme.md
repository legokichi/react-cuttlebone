# react-cuttlebone

Ikagaka cuttlebone UI Kit with React

## example

```xml
<Cuttlebone>
  <LayerSet>
    <Layer bottom=0 right=10 width=100 height=200>
      <Doc>
        Layer A
      </Doc>
    </Layer>
    <Layer bottom=0 right=90 width=100 height=200>
      <Doc>
        Layer B
      </Doc>
    </Layer>
  </LayerSet>
</Cuttlebone>
```

## components

### &lt;Cuttlebone />

the top level component of react-cuttlebone

```xml
<Cuttlebone>
  <LayerSet />
</Cuttlebone>
```


### &lt;LayerSet />

```xml
<LayerSet hover=true>
  <Layer />
  ...
</LayerSet>
```


### &lt;Layer />

inline-block or <img /> like inline element as have width and height

```xml
<Layer top|bottom=0, left|right=0, width=0, height=0>
  <Doc />|<LayerSet>
</Layer>
```


### &lt;Doc />

actually webview

```xml
<Doc>
  Naitive Documents
  ...
</Doc>
```

