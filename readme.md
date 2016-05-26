# react-cuttlebone

Ikagaka cuttlebone UI Kit with React

## example

```xml
<Cuttlebone>
  <LayerSet>
    <Layer>
      <Box bottom=0 right=10 width=100 height=200>
        <LayerSet>
          <Layer>
            <CanvasBox bottom=0 right=0 width=100 height=200>
          </Layer>
          <Layer>
            <Box top=0 left=-200 width=200 height=100>
              <Doc>
                <p>
                  hello react-cuttlebone!
                </p>
              </Doc>
            </Box>
          </Layer>
        </LayerSet>
      </Box>
    </Layer>
  </LayerSet>
</Cuttlebone>
```

## components

### <Cuttlebone />

the top level component of react-cuttlebone

```xml
<Cuttlebone>
  <LayerSet />|<Doc />
</Cuttlebone>
```

    
### <Doc />

actually webview

```xml
<Doc>
  Naitive Documents
  ...
</Doc>
```


### <Box />
 
Box is inline-block or <img /> like inline element as have width and height

```xml
<Box top|bottom=0, left|right=0, width=0, height=0>
  <Doc />
</Box>
```

### <CanvasBox />

canvas element

```xml
<CanvasBox top|bottom=0, left|right=0, width=0, height=0 />
```


### <Layer />

```xml
<Layer>
  <Box />|<CanvasBox />
</Layer>
```

### <LayerSet />

```xml
<LayerSet>
  <Layer />
  ...
</LayerSet>
```
