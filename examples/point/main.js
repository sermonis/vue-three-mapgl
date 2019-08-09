// Moscow
// var coords = [ 55.75222, 37.61556 ];
var coords = [ 37.3115070866121, 56.3497662318193 ];
// var coords = [ 55.75222, 37.61556 ];

var map = MapGL.world( 'world', {

    skybox: false,
    postProcessing: false,
    attribution: '<a href="http://mapgl.com" target="_blank">МосТрансПроект</a>',

} ).setView( coords );

// Add controls
var controls = MapGL.Controls.orbit();
controls.addTo( map );
// MapGL.Controls.orbit().addTo( map );

// How to move from city to city?
// https://github.com/UDST/mapgl/issues/134

// CartoDB basemap
// https://xyz.api.here.com/tiles/herebase.02/2/3/1/omv?access_token=AGln99HORnqL1kfIQtsQl70
MapGL.rasterTileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
// MapGL.rasterTileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
// MapGL.rasterTileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {

    // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    // attribution: null,

} ).addTo( map ).then( () => {

    console.log('Added Raster Tile Layer to world.');

} );

// console.dir(world)

// MapGL.Controls.orbit().flyToPoint({ x: 20000, y: 20000, z: 20000 }, 10, 5)

// Chroma scale for height-based colours
var colorScale = chroma.scale( 'YlOrBr' ).domain( [ 0, 350 ] );

document.getElementById( 'debugButton' ).addEventListener( 'click', ( e ) => {

    // alert( 'Debug' );
    // controls.moveTo( [ 37.3164129248322, 57.3479853123751 ] );
    // controls.flyToLatLon( [ 37.3164129248322, 57.3479853123751 ] );
    // controls.flyToLatLon( coords );
    controls.flyToPoint( { x: 0, y: 0 } );
    // MapGL.Controls.flyToLatLon( [ 37.3164129248322, 57.3479853123751 ] );
    // world.destroyDebug()

    // console.dir( map );
    // controls.tiltTo( 30 );
    // controls.rotateBy( 30 );

} );
// alert( 'Debug' );

// console.log()

// MapGL.PointLayer([ 37.3164129248322, 56.3479853123751 ]).addTo( map );

var json = {"features":[{"geometry":{"coordinates":[37.3115070866121,56.3497662318193],"type":"Point"},"type":"Feature"}],"type":"FeatureCollection"};
// var json = 'https://gist.github.com/sermonis/0ca99dc8e4e4c4078402f35abceb9b9c/raw/f40c53afe32d91788d4b8c240261efec650d4809/moscow-mo.geojson';

var object = {
   "metadata":{
      "version":4.5,
      "type":"Object",
      "generator":"Object3D.toJSON"
   },
   "geometries":[
      {
         "uuid":"95951741-EC39-4B7A-B43F-1EE12C35A40D",
         "type":"CylinderGeometry",
         "radiusTop":0.08,
         "radiusBottom":0.08,
         "height":"5",
         "radialSegments":12
      },
      {
         "uuid":"8E5ED46C-34F8-4365-9D38-34077003DEDA",
         "type":"CylinderGeometry",
         "radiusTop":0.08,
         "radiusBottom":0.08,
         "height":"10",
         "radialSegments":12
      },
      {
         "uuid":"5929A8D1-04BC-4113-ACB1-091475F779BC",
         "type":"CylinderGeometry",
         "radiusTop":0.08,
         "radiusBottom":0.08,
         "height":"10",
         "radialSegments":12
      },
      {
         "uuid":"F3E60C87-7D20-42A3-946B-4C8E5DA28E03",
         "type":"CylinderGeometry",
         "radiusTop":0.08,
         "radiusBottom":0.08,
         "height":"5",
         "radialSegments":12
      },
      {
         "uuid":"ECC7ECA1-2463-4167-BAE9-943BDC2FE3B2",
         "type":"PlaneGeometry",
         "width":0.7,
         "height":0.7,
         "widthSegments":1
      },
      {
         "uuid":"C1B38CC7-55CE-4490-80C4-F857AA39E312",
         "type":"PlaneGeometry",
         "width":0.9,
         "height":1.35,
         "widthSegments":1
      },
      {
         "uuid":"8BECD2AE-AB95-4A8E-AC77-4AF685295EBB",
         "type":"PlaneGeometry",
         "width":1.5,
         "height":2.25,
         "widthSegments":1
      }
   ],
   "materials":[
      {
         "uuid":"310799EB-2119-4837-A613-E62FA5D08D4B",
         "type":"MeshPhongMaterial",
         "color":12632256,
         "emissive":0,
         "specular":1118481,
         "shininess":30,
         "depthFunc":3,
         "depthTest":true,
         "depthWrite":true,
         "stencilWrite":false,
         "stencilFunc":519,
         "stencilRef":0,
         "stencilMask":255,
         "stencilFail":7680,
         "stencilZFail":7680,
         "stencilZPass":7680
      },
      {
         "uuid":"9E79A6DE-977E-4BB9-9E1E-7848592EE1DC",
         "type":"MeshPhongMaterial",
         "color":16777215,
         "emissive":0,
         "specular":1118481,
         "shininess":30,
         "depthFunc":3,
         "depthTest":true,
         "depthWrite":true,
         "stencilWrite":false,
         "stencilFunc":519,
         "stencilRef":0,
         "stencilMask":255,
         "stencilFail":7680,
         "stencilZFail":7680,
         "stencilZPass":7680
      },
      {
         "uuid":"370851F5-E085-4130-B241-641FC4E877C6",
         "type":"MeshPhongMaterial",
         "color":16777215,
         "emissive":0,
         "specular":1118481,
         "shininess":30,
         "depthFunc":3,
         "depthTest":true,
         "depthWrite":true,
         "stencilWrite":false,
         "stencilFunc":519,
         "stencilRef":0,
         "stencilMask":255,
         "stencilFail":7680,
         "stencilZFail":7680,
         "stencilZPass":7680
      },
      {
         "uuid":"CB6D3EDA-FACF-48F3-9660-7C2286E30B12",
         "type":"MeshPhongMaterial",
         "color":16777215,
         "emissive":0,
         "specular":1118481,
         "shininess":30,
         "depthFunc":3,
         "depthTest":true,
         "depthWrite":true,
         "stencilWrite":false,
         "stencilFunc":519,
         "stencilRef":0,
         "stencilMask":255,
         "stencilFail":7680,
         "stencilZFail":7680,
         "stencilZPass":7680
      },
      {
         "uuid":"F3094C13-1649-4708-8F32-F95C2D5E0242",
         "type":"MeshPhongMaterial",
         "color":16777215,
         "emissive":0,
         "specular":1118481,
         "shininess":30,
         "map":"3CD10AE7-2084-4455-9031-8D7A7DA12F90",
         "transparent":true,
         "depthFunc":3,
         "depthTest":true,
         "depthWrite":true,
         "stencilWrite":false,
         "stencilFunc":519,
         "stencilRef":0,
         "stencilMask":255,
         "stencilFail":7680,
         "stencilZFail":7680,
         "stencilZPass":7680,
         "alphaTest":0.5
      },
      {
         "uuid":"EF2BDAE6-12C7-4D2D-9147-8403F55EAC54",
         "type":"MeshPhongMaterial",
         "color":12632256,
         "emissive":0,
         "specular":1118481,
         "shininess":30,
         "side":1,
         "transparent":true,
         "depthFunc":3,
         "depthTest":true,
         "depthWrite":true,
         "stencilWrite":false,
         "stencilFunc":519,
         "stencilRef":0,
         "stencilMask":255,
         "stencilFail":7680,
         "stencilZFail":7680,
         "stencilZPass":7680,
         "alphaTest":0.5
      },
      {
         "uuid":"5730E01B-168E-40EF-92E0-C2DD276A3321",
         "type":"MeshPhongMaterial",
         "color":16777215,
         "emissive":0,
         "specular":1118481,
         "shininess":30,
         "map":"C15FD5BD-0671-47E6-A659-F4C8A12718FF",
         "transparent":true,
         "depthFunc":3,
         "depthTest":true,
         "depthWrite":true,
         "stencilWrite":false,
         "stencilFunc":519,
         "stencilRef":0,
         "stencilMask":255,
         "stencilFail":7680,
         "stencilZFail":7680,
         "stencilZPass":7680,
         "alphaTest":0.5
      },
      {
         "uuid":"67214B4F-CA8B-438B-8AD0-3E5A8E13B97C",
         "type":"MeshPhongMaterial",
         "color":12632256,
         "emissive":0,
         "specular":1118481,
         "shininess":30,
         "side":1,
         "transparent":true,
         "depthFunc":3,
         "depthTest":true,
         "depthWrite":true,
         "stencilWrite":false,
         "stencilFunc":519,
         "stencilRef":0,
         "stencilMask":255,
         "stencilFail":7680,
         "stencilZFail":7680,
         "stencilZPass":7680,
         "alphaTest":0.5
      },
      {
         "uuid":"114C9810-879E-4E7F-BDCB-6FF06E89BF38",
         "type":"MeshPhongMaterial",
         "color":16777215,
         "emissive":0,
         "specular":1118481,
         "shininess":30,
         "map":"9E7C4D0E-0938-40D9-88B7-0133821B342B",
         "transparent":true,
         "depthFunc":3,
         "depthTest":true,
         "depthWrite":true,
         "stencilWrite":false,
         "stencilFunc":519,
         "stencilRef":0,
         "stencilMask":255,
         "stencilFail":7680,
         "stencilZFail":7680,
         "stencilZPass":7680,
         "alphaTest":0.5
      },
      {
         "uuid":"A0EFB218-028A-4E21-8990-F71D917F68F5",
         "type":"MeshPhongMaterial",
         "color":12632256,
         "emissive":0,
         "specular":1118481,
         "shininess":30,
         "side":1,
         "transparent":true,
         "depthFunc":3,
         "depthTest":true,
         "depthWrite":true,
         "stencilWrite":false,
         "stencilFunc":519,
         "stencilRef":0,
         "stencilMask":255,
         "stencilFail":7680,
         "stencilZFail":7680,
         "stencilZPass":7680,
         "alphaTest":0.5
      }
   ],
   "textures":[
      {
         "uuid":"3CD10AE7-2084-4455-9031-8D7A7DA12F90",
         "name":"",
         "mapping":300,
         "repeat":[
            1,
            1
         ],
         "offset":[
            0,
            0
         ],
         "center":[
            0,
            0
         ],
         "rotation":0,
         "wrap":[
            1001,
            1001
         ],
         "format":1023,
         "type":1009,
         "encoding":3000,
         "minFilter":1008,
         "magFilter":1006,
         "anisotropy":1,
         "flipY":true,
         "premultiplyAlpha":false,
         "unpackAlignment":4,
         "image":"6B1FE7EE-14EB-4CD2-BD40-4D4384216A53"
      },
      {
         "uuid":"C15FD5BD-0671-47E6-A659-F4C8A12718FF",
         "name":"",
         "mapping":300,
         "repeat":[
            1,
            1
         ],
         "offset":[
            0,
            0
         ],
         "center":[
            0,
            0
         ],
         "rotation":0,
         "wrap":[
            1001,
            1001
         ],
         "format":1023,
         "type":1009,
         "encoding":3000,
         "minFilter":1008,
         "magFilter":1006,
         "anisotropy":1,
         "flipY":true,
         "premultiplyAlpha":false,
         "unpackAlignment":4,
         "image":"49DAC734-24C7-49F5-AD9E-77B7D71B6AAE"
      },
      {
         "uuid":"9E7C4D0E-0938-40D9-88B7-0133821B342B",
         "name":"",
         "mapping":300,
         "repeat":[
            1,
            1
         ],
         "offset":[
            0,
            0
         ],
         "center":[
            0,
            0
         ],
         "rotation":0,
         "wrap":[
            1001,
            1001
         ],
         "format":1023,
         "type":1009,
         "encoding":3000,
         "minFilter":1008,
         "magFilter":1006,
         "anisotropy":1,
         "flipY":true,
         "premultiplyAlpha":false,
         "unpackAlignment":4,
         "image":"B32EDE40-B88B-4A32-A120-A4229D5B45DF"
      }
   ],
   "images":[
      {
         "uuid":"6B1FE7EE-14EB-4CD2-BD40-4D4384216A53",
         "url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAAEcCAYAAAAV9AvgAAAgAElEQVR4Xu1dBViVydc/dEh3S6cIKmKhIqgoioKtqIC1ruuuXRuu8dm6q/u3C1tMQEAFQTGQJVQwgCspJd2d3zNX3ZL33vd2zTwPD+7eM2dmfmfuj/edOSEGuIkiAtIA0BsADNXU1Ew0NDSMpKSk9MTExDTk5eXlPjfZrq4uSRkZGRk5Obn2uro6OWVlZXEA6G5tbZVFoMnIyLQAgFhtbW2XkpJSc3Nzs1Rra2uruLh4R3Nzcwv6H+h3V1dXeXt7e3FFRUV+VVVVHgDkf/5pFUXwRXnNYqK8eCFfey8AsDM0NBymqKhoLycnp6eoqKiEmpqamoKNjY28ra2tqoaGhqS6ujpoaGiAqqoqRyCpqamBiooKqKysRL873r17V52RkdFUWVnZUN/YWF9XU1Pb3Nz8sb6+/nVBQUEcALwDgEaOTAYr5SkCmHB4Cj/bBjeVkJAYYGRk5Kqurm6hpqamrqenpzx8+HCN/v37K5uamoKSkhLbBuOEorq6OsjJyYGUlJSm+Pj4quLi4trq6urKurq6rJycnOjGxsZEAMjmxNhYJ/cQwITDPazZNRJ6HXKysrLyVlJSGqijo6Pj7OysNmTIEA1HR0dx9LQiTK2qqgpev37d/ezZs/LExMSqkpKSkrq6umQKhRICAEkA0CZM6xX2tWDC4X8LS0lKSg63srKar66ubmloaKg9ZswYLVdXV4XevdExjOi1Dx8+wJMnTxoiIyPLCgoKyiorKykUCuViR0fHEwBoFz1EBGfFmHD401baBgYG09XU1CYaGBiYTps+Xc978uRenDpj4U8IyM+qoaEBHj161BIUFFT85s2bksrKyqji4uJzAPCBvBYsyQ0EMOFwA2VyY/S3s7P7QU9Pr6+Tk5POjBkzdB0cHEBMDJuIHHyfpLq7uyE1NRWuX79ekpyc/LGwsPB1VlbW/9rb218wogfLcgYBvJs5gytZrXYmJiZL9fT0hnl5eRn6+/traGtrk+2L5UggUF1dDbdu3aoKDg4uyMzMTM/MzDwKAE9JdMUiHEAAEw4HQKWj0tTa2nq9vr7+4PHjxxvMnTtXnV9Ipq6lC2raOqEW/W7phNaObqhv66Yup72zG5o7Pv27uf3TbzmpT9tHTlIMpCQ+/VtJWgxkJMVAWVYClGXFQUVaApRkkfsO71tZWRlcvny5KiIioqC4uDgxPT19D7754q5dMOFwB29pTU3N2UZGRgvHjh1rvnz5cl09PT3ujPx5lOrmTiiq74CP9R1Q3NAJxQ0dUFj36b9rEMG0dkLXJx5hexMXA1CRkQAVWXHQU5IEfUVJ0FNAvyVA9/O/VeUk2D4uLYUfP36Eo0ePlsfExOQWFBScKiwsvAgA2BGRw1bAhMNZgC3Nzc3XGRsbuyxZssRkypQpMhISnP1iNbZ1QUFdB2RXt0F6eTvk1LRDWkUrlVT4uclLiYOJqiSYq0qDjbo0mKpJgqWaNKjIchYvdObz/Pnz9uPHj+ckJyenZWRkbAWAVH7GSpDnhgmH/dYT09LSmmJkZLRm4sSJZsuWLdPS1NRk/ygA0NnVDZTKNkgtbYOU0lZ4W9ZKfYoRpoaehvpoyUA/bRnoqyMNVmrSIIEemTjQkDf08ePHy+/cuZOdl5f3W3l5+U10Ds2BoURWJWcsJ5pwShsZGX2jq6u78JulS83nzZ3bS1JSkq1IoDOVVyUt8KqklfrzuqwVWj6fq7B1ID5Whs6L7LVloL+2LPTTlYZ+OrIg/fn8iF3T7urqgrCwsOajR49mvX379mZxcfF+AGhil35R1oMJh3XrK9vb22/U19eftHr1avMxY8YgT2C2teL6DkgoaoE/i1rgaX4zNLXz96sR2xZOUhE6oB6gIwuD9GVhRG85MFGRItmTnNiLFy86Dhw4kPPmzZtHb9++/RkAKsj1xFI9IYAJh/l9oWZjY7PXycnJffPmzb3Nzc3ZgiU6uE0tbYGYnGZ4WtAMH2qx4ywjJjJWlgIXQzlwN5UDB21ZYNfbF4rz2rZtW15iYuLD9PT09QBQyci8sOwnBNjyJRExMBWsra23mpmZeR86dMjEzMyMLRiiw927mY1wh9IAZU2dIgYpZ5arKisBY0zkYYKlPPTVlmXLZi8oKICff/45Pz4+PjozM3MtAFRzZvbCqZUtXxbhhOarVfWysbHZZGlpOW3vvn0WlhYWLDuXZFW1Qfj7Rrif0wQlDcJ12Mtve0JHQRLGmcqDl1UvMFNl/a0XxXNt2bLlw5MnT6JzcnLWAEAtv62ZH+eDCYe+VSSMjY3X2dnZLdi7d6+Zra0tS0TT1tkNT/Ob4FZ6IzwvbKY/OpZgOwJ2WtIwzVoRPMzkAV3Hs9IoFErXunXrct6+fXsuNzcXORLivxw0AMWEQwMcNTU1D0NDwz07d+609PT0lGNlY2ZUfHqaCctsgNpWfPDLCpbs6ovIZoypPEywkAdnPZbMC4mJie3r1q3LysjI+KWsrOwWu+YobHow4fRsUcO+ffsenjt3rsvq1avVmHXWQwfAcQVNcDa1Dl59xE6s/PzlsdWUBt8+ijDOrBfTfj7oOj0wMLDm999/p2RmZi5qa2t7y89r5sXcMOH8G3U5a2vrQ25ubuN37dplwGyWPBRzdD+rES68roPcGnzLxIuNzeyYBoqSMNdeCSZbK1BjxJhp9fX18OOPPxbFxMREpqenf499eP5GkTlEmbECn/dRVVUdj665z549a2NlZcWUPz0KeLz8ph6up9Xj1yY+tze96SnLiMMsO0WY00eRGojKTHv//n330qVLM9PS0taVlpbeYUaHsPXBhAOgYmFhccrX19f1559/1mDm9am+tQuuvq2H82/qAMUy4SY8CKCnHF97JfDrqwSKMowfMKNYrbNnz9YcOHAARaf7irrjoEgTjqGh4WwbG5vNp0+ftjI0NGQYC+T1eyOtAc68qoU6TDTCwzI9rAQdMKOnHT8HJVCUZpx4SktLYdGiRTmJiYlHy8rKDgg1WPiW6isE1O3s7K5s2LBh8Lx58xguZ4CuttETzdmUWvzqJGLfHJRiY4GDMszqo8hUDNe1a9fqt2/fnvTu3btZAFAuYvCxxflSoDBDZzX29vYHgoKCbHR1dRmeO/Kh2fO8mppLBjfRRQA5En4/UBk8LRQY/hKhqHR/f//c169fbyooKLgmSigy/BohwOBI2dvb/z5t2rSZ6KxGXJyxx+L3lW2wL74akopRsUncMAKfEHDWk4W1Q1WpuXsYbadPn67Ys2fPw6ysrABRuckSCcKRlpbuY2treyEwMNDe0dGRoZwRKFPekeQauJ3RwLGMeIxuVCzPXwigAFHkubxsoDLDCcMoFEqnv78/5fXr135NTU3J/LUy9s9G6AnH1NR0lbu7++o//vjDQFaWWhKbdIvJbYT/e1oN1S04mJI0aCIsiK7SVw5SBW9rxl6zWltbYfXq1UWRkZGHsrOz9wkzhMJMOJIODg4nly9fPmXRokXKjBgR5fvd8bQK4gpwrBMjuGHZv1+zfhmhBoZKjOXmCQkJqd+wYUPM+/fv56Bc9cKIp7ASjn6fPn1uXrlyxcne3p70KxQKRQilNFDPanCiK2Hc7txbE0oMtmyACszrq8RQTp6srKxOX1/fd4mJiT4AkMO9GXNnJKEjHGVlZffBgwcfCwoKslBRUSGNYn5dO/z0sBLelOGYJ9KgYUG6CPTVkoEdbuoMPe3UNzSA3/z5eUkvX64u/PAhmO4gAiQgVIRjbm6+efr06ct27NihzUjFyojMBtjxDD/VCNC+FaipoqedVc6qVN8dsg15KG/fvr3s0qVLpzIzM1FqU6FowkI4Yii6e926dXPnzp1L2pGvvq0LdsVVUTPt4YYR4DQCo03lYbOLOkOFASMiIhpWr1597/379ygsQuAjgYWBcGTt7OxCjh49OnLEiBGkr6GQP83PjyqgtBHfQHH6i4b1/42AupwEbB+lDkMNyOffSU1NbZ8zZ058WlqaFwDUCTKegk44On369IkIDg52NDc3J+XJh4oMXUitg0OJ1divRpB3rgDPHX3pFvZThmVOKqQPlIuLi7t9fHzeJCYmTgSAAkFdvsASTq9eveydnJxuBAcHW6mqqpLCH0Vyb35cCTG5uMQQKcCwEEcRQGVtdrhqkI5Cr62thWnTpmU9f/58ZlNT00uOTo5DygWScNTU1IYOHz788rVr14xlZGRIQZNZ1QZrosohH8dAkcILC3EHAV0FSfhtrAbYaJDbx21tbeDr65sfGxs7v6Ki4jF3Zsm+UQSOcLS1td1dXFwCg4KCDMlWtryf1QBbnlSJXJVK9m0TrImTCMhKisHWEergYd6L1DAolam/vz/KKLisuLhYoBJ7CRThaGlpeYwfP/7k2bNnjcgEX6LzmlMvauHoixpShsRCGAFeIjC3jxKsHqJK6lwHXZsvX768JDw8fF1+fv4lXs6bkbEFhnD09fWne3p6Hjpx4oQuGR8blLNm65NKiMBX3ozsByzLYwQ8zHrBtpHqgHx3yLTt27cXnTlzZvOHDx/OkpHntQy5VfF4lsbGxv4zZszYtWfPHh0yU0EpP1c/KMepJMiAhWX4DgFHHRk4OFaTdOT5r7/+Wnrp0qWtOTk5x/huMf+ZEN8TjkHv3j6+s2Yd3r17tx4ZMIvrO+C7e2W4WgIZsLAM3yJgpCQJh8drgZEyuQDQ3bt3l588efKn3NzcU3y7KH6vLa6pqenp4+Nz4sSJEwZkQKRUtsHSiDKcToIMWFiG7xFQk5WA4xO0wFKdXHKvNWvWlIaGhq7Mzs4O4tfF8e0TjoaGhquHh8fFixcvGpA5s0mraIVvI8pwjmF+3Wl4XkwhoCQtDoc9tQAFgZJpK1asKLp169Y3RUVFEWTkuS3Dl4SjpKQ0cPz48devXLliTOY26lVJC3x3rxynlOD27sHjcQUBVKrm0DhNUuWI0e1VQEBAQXh4eEBlZWUMVybIwCB8RzjIg3j06NF3bt68aUzGz+Z5YTOsiiqH1g50CY4bRkA4EZCWEIN9ozVgZG95ugvs7OyEWbNm5UdHR3vX1NS8otuBiwL8Rjiarq6uT+7fv29NxoM4Nq8J1kVXQDvKnIUbRkDIEZAS/0Q6rsb0Sae9vR3GjRuX+fDhQ3d+ir3iJ8KRc3R0jHvw4EE/DQ0NulsnoagZvr9fDsjfBjeMgKggICkuBgfHaoCLEX3SQTXO3d3dXyYlJY0EgAZ+wIhfCEfcxsYm6s6dO6PIRH2nlrZQb6Oa8WsUP+whPAcuI4CcAo+O14IBuvSzsXz48KHb09PzaVpaGnrS4XkxNb4gHDMzs3Pnz5+fOWzYMLoIvi1rhSURZfiAmMubHA/HXwig+KvjnlrgqEP3KwMvXrxo9/X1vUOhUKbxehU8JxyUFnT79u1rZs2aRTdTH4r4XhRWiq++eb1r8Ph8gQCqcX5qojZYa9D30wkODkYVIf7gdbpSnhKOmpramCVLlpzbtWsXXS/iwrp2mBdSip36+GKr40nwCwLIOfCCtzYYkChJs23btvITJ04sLC4uDuPV/HlJODrjx49/HB4ebknP16aupQv8Qksgt1bgU7ryys54XCFGAIVBXPDWoRt7hXx0fHx88kJDQ9F5Dk9K0PCKcKScnJyeRUdHOysr065Rh668l98rg4QiXNNbiL8zeGksIoAOkI95agHy16HVGhoaYPjw4a9SUlKG8aLYHk8Ix8zM7OqNGzem9uvXj2ZkGrrw/vVRJdzJ5IsbPRa3BO6OEeAsAii1xS43Dbr5dDIzMzt9fHxC3r17x/VDZK4TTu/evZf98ssvOxYuXEi3St3hpBo4/aqWs1bC2jECQoTAEpScfSDdrxbcvn27/scff9xBoVD2cHP5XCUcaWnpPn5+fvdOnjxJN/obpQXd+LCSm1jgsTACQoHAHjcNUulKly1bVnT69OkJ7e3tqdxaODcJR2rQoEGJjx49cpSTo12TJ6uqDeaGlOAcxNzaBXgcoUIAneNc9NYBKzppLVpbW9F5zpukpKRB3DrP4RrhWFhYnLlx48Z8BwcHSVrWRdn6fIM/4uoKQvUVwIvhNgL6ipJw1UeXbpXPjIyMrunTp195+/btPG7MkSuEg5Kfr1mz5sL69eu1aC0KxWCujCqDJx+aubF2PAZGQKgRGGooB4fHadE9RN6/f3/lgQMHlpaUlNzkNCDcIBxVDw+PP+/du2dJL5HW8eRaOP4SV1jgtNGxftFBYNkAFVgygLbrCfLPGT9+fFZkZKQLAJRyEh2OE46dnV1kdHT0WB0d2vnPE4uaYendMlx+l5PWxrpFDgFxMaCmKXXWo31uWlZWBm5ubjHv3r0bzUmQOEo4hoaGATt37jw4d+5cmnFS6Nxm+q2PUNLA82BWTmKNdWMEeIKAlrwE3JymR/c85+rVq/UbN25ck5+fz7FE7JwkHOXx48cn3b1714IeyhtiKiAyu5GeGP4cI4ARYBIBdxN5ODBGk25vT0/PrHv37g0BgAq6wkwIcIxwrKysbkZHR08xMDCgOUZIBirDi/1tmLAd7oIRYAiBrSPVYbKVAs0+Hz9+RJkC77x+/XoyQ8pJCnOEcNCt1IYNGy6tXr2aZuq+ovoOmH7zI85tQ9JYWAwjwAoCKBn7tam6dGtdHTx4sGr37t0BpaWlbK9bzgnCkRs6dOiLp0+f2tCKAkdX4CgC/E1ZKysY4r4YAYwAAwjYa8nA+ck6NK/Ku7q6YMSIERlxcXFOAMDWsw62E461tfXJ4ODgBdbW1hK0cLj8ph72xVcxABUWxQhgBNiBwLohauBrr0hT1fv37zsnTZoUSKFQFrNjzC862E04ZsuWLXt05MgRQ1qT/NjQAVNv4FcpdhoS68IIkEUApSe9NV0PkDcyrYZirY4dO+YGAO/J6qYnx1bC6du3b/STJ0/c6eW4QbW/4wqwNzE94+DPMQKcQmCQviwcn6ANtAigvqEBXIYNi379+vUYds2DbYSjpqbmsWXLlsvff/+9Oq3JRbxvgJ9i8a0UuwyI9WAEmEVgxyh1mGBB+9bq8OHDNVu3bp1fUVHBlrSk7CIc8UGDBr189uyZA61qmdXNneB9vRgnQWd2h+B+GAE2IqAiKw7B0/VAVY74uBUdIA8dOjQ1ISEBHSCz7JnLFsIxMjJaf/r06a1jxoyhWbNi+9NKuJWOs/excc9gVRgBlhCYZqMIPw9Xo6nj6dOnrQsWLNialZW1i6XBAGi+wpHVreDp6fkyIiKCpkfx+8o2mHX7I46VIosqlsMIcAEBFGt12UcHbDRkaI7m5eWVFR4e3o/VCp4sP+GYmJjsCw0NXW1vby9Oa8aLw0shqRgnQufCHsJDYAQYQqCfrgyc9dKh+fSRnp7e5ePj8z8KhbKSIeX/EWaVcJSmTJny4tatW+a0JhGT0whrojkSmsHK2nFfjABG4DMCB8ZogLtJL5p4+Pj4ZIeEhAwEgGpmgWOJcMzNzf8XHh6xzMrKkvDppq2zG3yuFwMKY8ANI4AR4E8EdBQkIWSGHiAfHaKWlZXVPXHixGMUCuU7ZlfBCuGozJo1K/nq1atmtAY/n1oHvycwTYjMrgv3wwhgBBhEYNUgVfBzoF1xe9bs2TnXgoLQUw5TYQJME46lpeWJe/fuLTY1NSXU0djWBZ5Xi/A1OIOGx+IYAV4goCQtDhFz9AHVLCdq+fn5MHbs2NPMhjwwSzhqvr6+yZcuXTKhBcypl7VwJBmnDOXF5sFjYgSYQeA7JxVY3J92StL58+fnXbx4EfnlMOzByxThWFhYHAwLC/vBysqKsH99WxdMxE83zNgc98EI8AwB9HRzd7Y+KMoQP+Xk5uaCp6fnHxkZGSsYnSgzhCMzceLElLCwMGtagx1JqoFTuGomo/bA8hgBniOwuJ8yfEeneueECRPe37171wEAGPJ1YZhw9PX1V167dm3PsGHDpImQqW3phPFXi3FiLZ5vHTwBjADjCKBEXegph1bIQ1xcXIefn99P2dnZexkZgVHCERs+fPirJ0+eIGYjbPjphhETYFmMAP8hQOYpB1XtfPbsmSMAdJFdAUOEo6Ki4n306NELs2fPJsze09LRDeOuFEJNC+k5kJ0rlsMIYAS4hICyjDjcm6MP8lLEZzk3btxo/uGHH/xLSkquk50WQ4TTv3//uISEhKG0IsKvvauHXXFMXdGTnbNQy1moSYOXRS/4DfsuCbWdBWFxG4eqwaw+xJkBOzs7YciQIX8mJSWhKg+kGiOEY7Z58+a4rVu3ahNpRnmKva8V4brgpKD/txD6i/LtABWYbqsA76vaYPbtEia04C4YAfYhgDIC3pmpBxIowpOgbd++vXzz5s2jAOAdmZFJE46VldWF2NjYebQqaMbkNsKaBzhmigzwX2QkxAGmWinCsoHKoCL7KS9JekUrJhxGQMSyHENg/2gNGG1KHGNVWVkJrq6ul96+fTuPzCTIEo60l5fX6zt37ljRUup3pwRSS3AVBjLAI5nBBrKwdrAqmKv9+8IPEw5ZBLEcpxHooyUDl7xpl+n28vJ6Hx4e3hcA6H75SRGOpqam34WLF0+M8/AgTJqBvyTkTW+kJAlrhqjCyN7yPXbCWJLHEktyHgGUL8dOkzhfTmRUVKu/n9/SkpKSc/RmQ4pwnJycnv/5559DJCSIUxHueFoFN9Lr6Y0n0p8j/4YAB2Xwd1QCaQli6DHhiPQ24bvF08sK2N3djQ6PnyYkJIygN3kyhGOyadOmuJ07d+oSKWtq74Ixl4sABWvi9jUCCORJVgqwYqAKqMnTLNeFz3DwBuI7BNDV+ANffehFI6jzxx9/LN21a9cwAMimtQC6hGNlZXU0JibmW319fUI9oZQG+PUxw3FcfAcsJyaEKh2uH6oK6DfZhp9wyCKF5biFwJYR6uBtTVzhoaioCNzd3VGunGUsEY67u/ur6Oho5E1I2OaF4JK9/wVHS14CvnVSoRaPp3GriM9wuPWNweOwhAD6g3mRzuGxq6tr6uPHj2lyBb0nnL779+9/uGbNGsJaU1lVbTDt5keWFiNMnaXExWCm7adrblpemrTWjJ9whGlHCM9ark/VBUt1whBK2L9/f+W6deuQT84bolXTJBwbG5vTMTExC3V1CY9v4OCf1XDudZ3woMrCSjzMesHKQSqgq0C7hCq9ITDh0EMIf84LBPz6KsGqwaqEQ5eWlsKoUaNOpaenL2GKcMaOHZsSGRlJGKjZDQCeV4oA1QoX5WamJgXrBqvCYAM5tsCACYctMGIlbEZAp5ck3J2jT/OIwN3d/fXDhw8JOYPWE07/gwcPPlixYgVhlazU0hbwCy1l87IER92XcIQZdooMn9PgVyrBsTOe6d8InJ+sDQ7axPUuDx06VL1y5Up3AHjVE26EhGNra3s2NjY2QFNTkxDv/c+r4dJb0XudkhQXgylWCvDdQGVQ/hyOwM5NiZ9w2Ikm1sVOBOb2UYK1Q4lfq8rLy1GoQ2BaWtoChgjH3d39ZXR0NKq012NDgZrjLhdCWVMnO9fD97qGGshRATdVkeLYXDHhcAxarJhFBDTkJSDK14Dea9XLhw8fDmCEcAx+/PHHxB07dhCeFr8saYEFd0TndcpYWQq+d1amWyyMRXtSu2PCYQeKWAenEDjrpQ39dYlfqzZt2vRx9+7dgwCg4L9z6PGVytDQcG1YWNheBwcHwlcuUXmdQkmllw5QgZl2CoBepbjRMOFwA2U8BrMI0HutevXqVffkyZPXFRQUHCBFOE5OTg8TExNHiYkRf8EmXyuGD7XtzM6Z7/shbvGyVICVzio0c7tyYiGYcDiBKtbJLgQMlCQhfBZx5AGKrRo0aFB0UlLSGDKEIzlz5sy0oKAgC6IJFtd3UAvcCWvrqyUDG4ap0oyQ5eTaMeFwEl2smx0IhM/SAwMl4nPMqVOnZt6+fdsOAP71VNLTI8yoK1eu3Jk9ezZh4ISwphFFfgbonMbTQgG48/LUs+kx4bDjK4F1cBKBTcPUYKYdcfrRS5cuNQYEBEzo6Oh4/M95fPW9srOzO/f06VM/VVXiq68f7pfBk/xmTq6Hq7pRAfe59kqwwFGJ6XAEdk4YEw470cS6OIHAiN5y8IeHFqHqqqoqGD58+FfX418Rjqur6/NHjx4RJkVu6+yGEecLAFVnEIbmaiwPG4aqshyOwE4sMOGwE02sixMIyEiKwZP5hoB+EzXEJY8fP0YpK/5q/5WWnjt3bvrFixdNiZT8WdgMS++WcWINXNVppyUNG4aoQV9t8mkjuDVBTDjcQhqPwwoCxz21aIbzzJkzJ+fq1as2AND2ZZz/Es7QCxcuRM6bN4/w/OZYcg2ceFnLyjx52hc5Lv0wUAUmWjKeNoJbE69q6oSwzEZuDcd34zS3d1OrtjZ3dENdWxc0t3dBSUMn5NW2A3rCxo0/EFjaXwWWOikTTiYwMLB+wYIFYwHgzx4Jx8rKal9kZOTa3r17EypZElEKiUUMlRPmC3RQ2oh59kqwsJ8SzcxlfDFZPIkeEUDe7SUNHVR3jOyqdkj62AJJxa24pDSP9ouzviycnEBYNQpyc3PBw8NjT2Zm5sYeCWfgwIGPEhMTXYnm39HVDS7nBO/8xs1EHlYPUqF5jccjm+FhWUSgs6sb0iraIKmoFaJyGiGj8q+ndxY14+70EECXLc/8DWk6xA4aNAhxiluPhOPt7Z0WHByM3rl6bGnlrTAnWHAKtJmoSMG6Iaow1JA9aSPoGQB/znsEcmvaISKzEUIoDVAhYnF+vED/io8O2NKo6DBp0qT0sLAw254Ix3Tbtm3xv/zyC+Fd19W39bDnOf+X8UVpI5Y5qcA0GwWaVQN5YSA8JncQQK9fD3Mb4dSrOqDgpx6Ogb5+iBrMsSf2x9m+fXvZ5s2bBwNALprEX4fGcnJys8LDwy+7ubkRVi/fEFMBkdn8e5jJy3AEjlkUK2YZgcTiZjiSXIuLNLKM5NcKxprJw1534hQ2MTExXVOnTnFtfDsAACAASURBVJ1TW1t77V+EY2VlderZs2eLNDQ0CKeFwhlQWAM/NlTFEr0+makS51zlx3njOXEPAVSKet/zGihp5M89zD0k2DcSSqd7bw5xXFVFRQWMHDnyRFpa2tJ/EY6zs3NMQkLCX4c7/51SfVsXjDhXAPx2KamjIAnfD1SGCRbEJSzYBy/WJOgIIIfVC6l1cOpVLbSj9y7cWEIAvSI98TcElFWBqA0aNAgFg6MsgH+/Unl6eqZEREQQ5iLlt3SiqCLCkn7K1PdHWlUsWUITdxZaBFC1kU0PKyGzCt9qsWrkc5O0wVGHOD/OhAkTUu/evUstH/PlDKfXkiVL0k6cOGFENPj1d/WwM473B8ZowmPNelGvubVZrI7AKtC4v2AjgJwI/0ioEck0uey03E8u6jDdlvgNY+HChR/Onj2LbqqavhDOoHPnzkX7+fkR9tr5tAqu87h2eJ/PVSxR+gjcMALsQuB+VgNse1qNHQiZBBRFjaPocaJ25syZ+kWLFqFXqiQq4RgZGa0MDQ393dGRuGie350Snp3ys1LFkkkMcTcRQyCnug2+vVsGpY2ilaObHWbupyMDgZN0CFW9fPkSJk+e/ENhYeH/qIRja2sbGB8f76+kpNRjJ3S0NiywgOt/AdDZjH9fJfDnk7QR7DAO1sG/CBTVd8C3EaWQX4dvsRixEjpPfR5gSNiluroahgwZcppCoSymEs6AAQMik5OTUZBVj626uRNGXSxkZA4sy6K0EeuHqIKeImtVLFmeCFYgUgigvb7sfhmkl+PDZEYMHzvfAFRolEwaMGDA/ZcvX46nEs4od/f4h9HRyBuwx/auvBV8uRTSYK4mRX0fHEAjKzwjQGBZjACjCNS3dsGCsBLIrBLenN2MYkJP/rKPDs2UvG5ubijP1jAq4UyaNOltaGgoyj/aY3uQ3QjrYirojcmWz+UkxSDAQZn6GoWvu9kCKVbCBALljZ2Azi351dGViSVxtMv+0Row2rQX4Rje3t6IY+wR4UgvWLDg/ZkzZwhzUpxLqYODidUcnfB/lfdWloIfuFQHiqsLw4MJDAIFde3gH1oKlc34IJme0VYNUgU/h57PgFFff3//vPPnz1shwrHYt2/f87Vr1xLGNOyKqwKUOJ0XbZihHKwdogoo8hs3jAC3EUgpaYGF4aXQ2cXtkQVrvBk2ivDjcOKr8d27d5dv2rRpCCKc0WFhYfcmTpxIeDr73b0yiCvgXdJ0CXGAqVaKsGygMs2DKcEyEZ6toCBwPrUOfk/g7hO+oGDzZZ7oweDIeOKk6iEhIe0+Pj7jxTQ0NBZF3L17ynngQMI1Tr1ZTM2wxuumIisO3w9UBR9r/k0PymuM8PjsRwCFXK2MFK5KJexGyUxNCm5N0yNUGx8fD56engFiFhYW2+7du/eLmZkZofCoC4VQ3cI/77FW6tLUyHAnPeL4DXYDivWJNgK1LZ0w49ZH7BhIsA3UZCXg4XwDwk2SmZmJCOdXMVtb29PPnz9fqKzcczJkxO5Opz8APwbWYl8d0SYBbq/+UW4TrHpQzu1hBWI8lIsqeVFvQL97ap/rVJ0Us7e3D01NTZ1EVEe8rqULRlwo4NtFo+ToM20V4VsnZZwcnW+tJDwTWxFZBo8/8O48k5+RfOpnCIoyPaep6OrqAgcHh2AxZ2fnyISEBEIv4/zadph0rZif10mdm6a8BDWt6GQrfL7D98YS4Ami8Aef68W4XE0PNgybpQeGNOqNI64Rc3V1ffLo0aPhRHvgTVkrzAsRnMTpKJJ8wzBVml6PArzf8dT5AIHjybVw/GUNH8yEv6Zw0VsH7GlkchgxYsRjsbFjxyZERkY6E039yYcm+CFSsN5bcc4c/tqIwjabhrYu8LxSRC3Sh9vfCBwepwkuRvKEkHh4eCSKTZw48WVYWFg/IqnIrEbY8JA7YQ3sNh7OCshuRLG+LwgcTaqBk68EtwItJyy5x10DPMyIwxsQ1yDCSQkLCyNMLXqH0gCbH1dyYn5c04nzHnMNapEZCF2mjLtaxPWULfwM8A5XdZhgSZz5z8vLK1XM29v7TXBwcB+ihdxOR9nQBJtwvqwNV3bg5+0qeHM7EF8NF9/UCd7EOTTjzcPVYYoNMeEgrhGbMmVK2q1btwirbaIYKhRLJSwN+QnMsFWEZQNUQEmWONM8L9ebV9MOP8UK5mssO3CTFBejVgHQ6yUJyIO1v64MmKtJ/53xnx2DsEFHdnUbTL3xkQ2ahEMFSiuD0o0SNcQ1YlOnTqXcvHnTkkjo0us62P+n8MWR8HN1zvSKVph9W3BuBrnxddFXlITJlgrUZN2qchLcGJLUGLODP+JkXZ+RWjtYFeb2JY4Ynz59OkVsxowZWdeuXSOMawhMqYNDXE5NQcrSbBJCCb9QmMQgff6pP44Jh9i4spJiMN9eCRb0Uwb0b163K2/qYW+88LwBsILnCmdVCHAkJhzENWIzZ87MCQoKMiEa6OSLWjj6Qvh9DkYZy8PqwSo0HZdYMQYjfTHh0EfLSEkS9o7WBGsN3lZaRSlJR18uxOkrAODbASrwzYCeQ6SQRWfNmpWLCecfexuFScyzV4KF/ZR4GiaBCYc+4SAJlBFy1yh1cKeRaY6cJtak5oeUwOuyVtaUCEFvUoQj6q9UPdlZXU4CVjirwERL3oRJYMIh/+1DlwDb0XUsD0s9H0mqoZYOFvX2/UAVWNiP+AmH+kolqofGZDaHnZY0bBiiBn21uVt4DxMOGev8LYMStB0brwXOPDqHSyxuhiXhZYxNWgil6aUZpR4ai9q1OKN2RseSnha9YMVAFdDiUmlhTDiMWgkA5WO5PlUXNHpx/wartaMbhp8vEPmATnq3VNRrcVFy/GN8G//dA92ILHJUhnl9lUCGw7cjmHCYs9RYM3nY667JXGcWe/GyMi2LU2dbd3p+OFTHP3qhDWHvG+CXWOHwNGYHsroKkrB2sAq4mfbimCMaJhzmLRU4SRv66XA/E+SWx5UQQmlgfuJC0HPbSHWYZEUntEGYgzc5aUOU3hRVBrVUZ/+1LCYc5i031FAOjtJI5s28Zto9eVFKiVNrYVbvgTEa4G5CM3jzBd30FM/ym2D5fcFKT8EsYIz2QzckXpYKsNJZha3er5hwGLXE3/LozC1itj7XS0Q/ymuCVVGi/T055qkFQwyIHWip6SlGjhz5ODY2dgSRiQUtARfzW5X5nijuZ+kAFZhhpwDIl4fVhgmHNQTp3Zawpr3n3jnVbTBFxOOqzk/WBgdt4tdZagIuuilG69phUhD/pxjlxCZiVKeJshSsHaoKqEYPKw0TDivoAfDitaqqqRPcLhWyNnEB7x06Uw9QxVyiRk0x2qdPn+DU1FRvcfGeI6dRYXd05YcbeQSGGMhS47NMVZk738GEQx7rniRRYO5jP0PWlDDYu7mjG4aczWewl3CJPw8wBJT0rqfW2dmJkqjfFrOxsTkZFxe3WFVVtUdBfi4Tw8/mQikW5tgpwuIBytRUC4w0TDiMoNWzbOx8A65Wae0GgAGn+LOcEuto0tcgJykG8QuMCAUrKythxIgRx8XMzc1/vXfv3hZzc3NCYbcLhVDFR4Xw6C+ffyTQX1sUYzLDTpGwZs9/Z4sJh3X73ZmpB0Y0Hu9ZH+FrDcPPFUC9iOY5RscJwTOJK29SKBSYMGHCL2JqamoLIiIizgwePJjQBvxS6pcTm4RbOq3VpWH9UFXor0vfRwQTDutWCZqiy/VIco/LhSJbmXOgniycmqhNaLjnz58jwvFDVyqjQ0JC7k6ePJnwtOe7e2UQV4CLf7H+NQAgUy0UEw7rSF+dogM2GtyNgRt3uQhKGjtYn7wAaphg0Qt2jNIgnHlwcHD7lClTPBDhWOzZsydu/fr1hD7hKMUoSjWKG3sQ+FItdNlA5R4P2TDhsI4zJhzWMWREg39fJVg5uOdzYKRn9+7dZZs2bRqCCEc6ICDg/dmzZ3sTDXA+tQ5+TxC+NKOMAMoJWS15Cfi2h2qhmHBYRxsTDusYMqJh3RA18LUnzmfs5+eXd+HCBUuql9rkyZPfhISEEFZuiM5phLXRopvUmxHgmZF11JGhnu/Yfn4FwITDDIr/7oMJh3UMGdFArybVpEmT3oaFhdlTCcfNze15TEzMEKIB3pW3gm8wTurNiAEYlf1ntVB0I4iTqDOKICYc1hBjrTc9gnd1dX3++PHjYVTCGTBgwP3k5GQPoiFR3tZRF0Xbi5I1c5DvjRynPMzkIThDtCOPySPWsyS9LwCr+nvqL6qHxohEni8wAuSLQ9T69+9/79WrV55UCVtb27PPnz8PUFbuOT0gcmoaFliAqwxyYpdinRxBABMOR2DtUamBoiSEz9YnHLCqqgpcXFxOpaenL6ESjq6u7oqIiIiD/foRlhiHgDsl8KoEJ4rmnhnxSKwggAmHFfQY64tcPQ6OJU589uLFC5g0adLy4uLiI1+egZzPnDkTvWDBAsJj5t1xVRCEr8YZswSW5hkCmHC4B/2ifsqwfKAK4YAnTpyoXbp0qRsAvPxCOHKLFi1KP3XqFOHV+M20Bvi/ZzjzH/fMiEdiBQFMOKygx1jfHaNoV80ICAj4cO7cOVROvPmvUx5PT8+UiIgIB6KhUktbwC+0lLGZYGmMAI8QwITDPeDphZGMHz/+1f379/ujGf1FOM7OztEJCQnuRNNsbOsCl3MFgA6QccMI8DsCmHC4YyGUby4ugPYNFeKWpKSkMf8iHFtb2xOxsbFLNDWJD38mXC2ConrRjBXhjvnwKOxCABMOu5CkrcdYWQpCaESJl5aWgqur65GMjIzl/yIcOTm5mWFhYVfc3d0Jk7dsiKmAyOxG7qwEj4IRYAEBTDgsgMdAVx9rBfh1hDphj6ioqE5vb++Zzc3Nt/5FOABgum3btvhffvlFi6h30Nt62P28ioHpYFGMAG8QwITDHdy3jlSHyTRKw2zbtq30119/HQQAH/5LOCimKi0kJASdJvfYcIwPd4yIR2EdAUw4rGNIRgO9PMYTJ05Mi4iIsPui61++yE5OTo+SkpJciQbq7EIlTQuxxzEZS2AZniKACYfz8KvKSsDD+QY0C0L+88D4qyccCwuLPVFRUeuNjY0JZ/tNRCkkFLVwfjV4BIwACwhgwmEBPJJdR5vKw/7RxJdMmZmZMH78+O3Z2dmbe3zCAYDBgYGBUf7+/oQex8eTa+H4yxqSU8JiGAHeIIAJh/O408uBc/LkybpvvvkGeRi/ICIcKV9f34xLly6ZEk03oagZvoko4/xq8AgYARYQwITDAngku1720QE7TeI0rjNnzsy+fv26NQD85UvzVTz5yJEj42JjY4cSjdnW2Q0jzhdASwd2ASRpFyzGAwQw4XAWdFlJMXjmbwioHBJRGz58+LNnz54N/+fnX0mjVBVPnz4NUFNTI1T0Q2QZPPmAk6pz1qRYOysIYMJhBT36fUcZy8PvNCLEy8vLYeTIkdSUFDQJBwBcL1++HDZnzhwFomGvv6uHnXHYH4e+WbAErxDAhMNZ5LeMUAdva0KKgMDAwPoFCxaMB4A4eoQjOXPmzLSgoCALoikXN3SA55Uizq4Ia8cIsIAAJhwWwKPTFb1FPfA1AHV5CUJJHx+f9yEhIbYA0EmPcFDK0ZikpCQ3MTHi9zPva8WQV9vOuVVhzRgBFhDAhMMCeHS6OujIwPlJOoRSXV1dMGjQoKie0hb3yCj6+vprwsPD9zk6OhIyzoH4arj4po5zq8KaMQIsIIAJhwXw6HRd4awKAY5KhFJJSUldU6ZMWVlYWPi//woREYrBpk2bEnfu3KlLpDWlpAX87+D8OJwzK9bMCgKYcFhBj3bf2zP0wFSFsFAvrF27tvjAgQNOAPCRLOGAu7v7y+joaMIkx13dAOOviG4tZc6ZE2tmBwKYcNiB4tc6jJQk4c4s4oTpqMfo0aOTY2JiBvY0A8JXJnQ9HhsbG0ArP85v8dVwAb9WccayWCtLCGDCYQk+ws70SvqWlJSgOndfXYd/UUh8Kgzg+Pvvv8esXLmS0CHnTVkrzAvBBfI4Y1qslRUEMOGwgh5x3wveOtBXi9i7eO/evZUbNmwYCQDvGHrCQcJjxoxJiYqKIsxzjHyNJ+IsgJyxLNbKEgKYcFiCr8fOJspScHumHs3o8NGjR6fExMQQHsXQesIBKyurU48ePVqkq0t4dgwH/6yGc6/xbRX7zYs1soIAJhxW0Ou576pBquDnQHw7VVRUhM5v/konyvATDgD02bt376N169ZpEE0/u7oNpt746jCa/avFGjECDCCACYcBsEiIIme/+7P1QUtBklB6586dlT/99BOKnUonEqL5hIM6ubu7v4qOjnakNaf5ISXwugxX5SRhNyzCJQQw4bAX6BFGcvDHOMLsw9TBXF1dXz5+/HgArZHpEo6Njc3RqKiobw0MDAj1hFIa4NfHuEgee02MtbGCACYcVtD7uu+BMRrgbtKLUOmHDx/Aw8PjDwqFsoIlwgEAk02bNsXRcgJs7uiG0ZcKAdWuwg0jwA8IYMJhnxWUZcThwVwDkJYgfj5ZtWpV8cGDB4cAQD6rhAP9+/ePS0xMHCohQRystfNpFVxPr2ffKrEmjAALCGDCYQG8/3T17aME64aqEipEsVODBw9+TCsf+pfOdF+pkKC6uvr8S5cvnxzn4UF4AZ9R0QazbuPDY/aZGWtiBQFMOKyg93dfRBA3p+uCmao0ocKIiIiWhQsXLiwtLb1Cb1RShAMA0l5eXq/v3LljRUuh/50SSCnBh8f0QMefcx4BTDjswXi4kRz8j85h8YQJEzLu3r3bFwDopo8gSzjIJ+dCbGzsPB0d4rD0R7lNsOpBOXtWirVgBFhAABMOC+D9o+upidowUE+WUBkq5evm5haYlpa2gMyIpAkHACw3b978ZOvWrdpEilFAp8/1YviA8+SQwR7LcBABTDisg2ulLg1BU3VpehZv3ry5bPv27S4AkElmREYIB5ycnJ7/+eefQ2gdHt9Ia4Adz/AVORnwsQznEMCEwzq2e9w0wMOc+Cq8o6MDhgwZEpecnIwIh1RjiHBUVFS8jxw5cmHOnDmEdatQNYfxV4qguuVfmQVJTQYLYQTYhQAmHNaQ1OklCeGz9WhWZbh06VLDqlWr5lRUVISRHY0hwkFKhw8fnvLkyRPCgE4kg4vlkYUfy3EKAUw4rCFLr8gd0j506NCU+Pj4/gBAumYUw4Sjr6+/MigoaI+LiwvhPVldSxeMDyrCjoCs2Rz3ZgEBTDjMg9dLWhwi5+iDgrQ4oZJHjx61BwQErP7w4cNhRkZimHAAQGbChAkp4eHhqKIeYcNPOYyYAcuyGwFMOMwjutxJBRb1V6apYOzYsekPHjxAMZZtjIzEDOGAiYnJgbt3766ytrYm7N/Q1gUTrhZBbSsOd2DEIFiWPQhgwmEORzVZCerZjbwU8dMNhULpnjx58n4KhbKe0VGYIhwAUPP19U2+dOmSCa0Bz7yqhf8l1TA6JyyPEWAZAUw4zEG4aZgazLQjvBOiKv1cMxxFhdcyOgqzhAOWlpYn7t27t9jU1JRQR1N7F3gFFUNlM76xYtQwWJ41BDDhMI6fvqIkBM/QoxmkmZWV1T1hwoQj79+//57xEYCmTw89fSqzZs1Kvnr1qhktwYuv6+DAn9X0dOHPMQJsRQATDuNw7hilDhMsiMv3Io3e3t7ZoaGhqAQMU68uTD/hoMHNzMz+iIiI+M7Kyorwha+9qxum3/iIq3Qybn/cgwUEMOEwBp6l2ievYpTZj6ilp6ejAneHMjIyVjOm/W9plggHABSmTp368ubNm4R1yNFQj/KaYFUUjrFi1ki4H+MIYMJhDLPD4zTBxUieZicvL6+s8PBw5HfDdB4aVgkH3VjtCw4OXuXg4ECcLAcAvokohYSiFsZQwNIYASYRwIRDHjgUnImCNGm11NTUrhkzZux9//79JvKav5ZkmXAAoJenp+eriIgImk85OTXtMP1mMXTiW3JW7IX7kkQAEw45oCTEAa5N0QVzNeJ8N0jTuHHj3kdGRiK/m2ZymnuWYgfhQO/evdedPHly29ixY4nj2AFgV1wVXHvH9NMYK+vEfUUMAUw45Ay+pJ8yLBuoQlM4Kiqq6ZtvvtmUl5f3BzmtxFJsIRwAEHd2dn4RFxfnKClJXEaipqUTfK5/xIGdrFoN96eLACYcuhCBgZIk3JymB7KSxDTwOSL8ZXJyMqoVzvL7CbsIB6Uhdfvll1+ur1ixQp3WUu9mNsCPj3D6CvrbAUuwggAmHProkTko3rNnT+WuXbtm1NbWPqSvkb4E2wgHDWVnZxf95MkTdzU1wnLk1BmtjCqH2Lwm+rPDEhgBJhHAhEMbuHHmvWC3G2F9S2rn6upqGDVqVERqaupEJs3wVTe2Eg4AGC5duvTZsWPHjGhNsKShA6bc+AjIExk3jAAnEMCEQ4wqigYPma4Hmr1oXixDQEBAwblz51ByLZqlXxixH7sJBywsLI6FhIQssbW1JY7+AoCgt/Ww+3kVI3PFshgB0ghgwiGG6icXdZhuS9ujOCUlpWPatGlHs7OzaRa2I22Qz4JsJxyUvsLFxeVFbGysHa1UpCj/cUBYCaTiKg+M2gzLk0AAE07PIA0zlIPD47VoxjR1dnbCsGHD3iUkJKAQBrY6z3GCcEBLS8tj3bp1l9auXUvzJbG4vgOm3cSvViS+P1iEQQQw4XwNmKqsBNyYqgsadF6ldu7cWf7bb7/NrqysjGEQdrriHCEcNKqVldXN+/fvTzE2NqY5xh1KA2zGdcnpGgoLMIYAJpyv8aJXHxz1yM/PR9Hg19++fTuLMcTJSXOMcABAedy4cYn37t2zpDeVTQ8r4F5WIz0x/DlGgDQCmHD+DdUMG0X4cTjt22PUw93d/f3Dhw8HMRsNTs9AnCQcMDY2nr1ly5Zjfn5+NPMV1rd1wYybH+FjQwe9+eLPMQKkEMCE8zdMRkqS1EhwWln8kPSZM2dqt2zZsrywsPASKZCZEOIo4aD52NnZ3X/w4IGHrq4uzem9+NgCi8NLAR0m44YRYBUBTDifEJQUF4OL3tpgoyFDE9KioiIYO3bs3bS0tAmsYk+rP8cJBwBUPDw8Eu7evWspLk7zphxwSlJOmlq0dGPC+WTvVYNUwc9Biabxu7q60KsUJTY2digAcNRXhRuEg26txq5aterixo0btWitHD3crI8uhwc52AtZtOiB/avFhAMwxlQe9o7WpJvWc9v27RXHjh71Kykpuct+S/xbI1cIBw1pbm5++saNG/MdHR2laC0KeR/PCy2B7Kp2Tq8d6xdiBESdcFBd8HOTdUCORmAmMv/Lly875s2bdzYtLe0bbmwHrhEOAEg5OzsnxMbG9pOTk6O5tg+17TD7dgkOfeDGDhDSMUSZcJRlxOHKFF1ASdFp/nFvakIOfq9SUlIGM1pfitltw03CAQUFBbuZM2feP336tAG9CUdmN8KGmAp6YvhzjECPCIgq4aCEWic8tcFJj2ZqKipm/v7+BUFBQWNaW1sp3NpGXCUctChTU9NlGzdu/L/Fixer0lskrt5JDyH8ORECoko4ZOpKIcwCAwNrtm/fvjk3N/d/3NxFXCecz+c5l69duza9f//+NM9z0CHylseVEEpp4CYmeCwhQEAUCWeylQJsHUkzHRXVsqmpqR2+vr6X3717589tU/OEcNB5joODQ9zDhw8H0sud09bZDd/dK4OkYrbGkHEbZzwelxEQNcIZpC8L/xunRbOIHTJBTU0NDB8+PPHt27co7QTXb2Z4RTho7TqjR49+ev/+fXNaUeVIsL61C+aHlkBuDdfx4fLXBA/HLgREiXDQjdRpL21QlKbt54b8bTw9PbMjIyNHAEAxu7BmRA8vCQelJXVfuHDhhT179ujRm3RRfQfMDynBZYPpAYU/pyIgKoRjrCwFgZO0QVWOdjIthMm6detKrl696ltUVMSWdKHMbDWeEg6asIWFxc9bt25dO3v2bJrxVkg2q6oNFoaVQm0rzhTIjLFFqY8oEI6WvASc99YBXQXa19/I7hcuXECHxHuysrJ283If8JxwPh8inw0MDJzt4uJC9y7vXXkrLA4vwz46vNw1AjC2sBMOen06O0kbLOjUk0KmevLkSevSpUsvp6enL+S16fiCcFCZGQsLi7t3794dbW5uTvfZ8HVpK7WSZ3MHjvTk9Qbi1/GFmXBkJMXg5AQtcNCm+/cZcnJyury8vCLT0tJQInSevxrwC+GgfSvn4ODw9MGDBwM0NTXp7uP4wmb44X45tOPwcrpYiaKAsBIOIps/PDRhkD5tb31k88rKSlR1IfnNmzcjAYAvAhT5iXAQRhrDhg17FhUVZSUvT7uwOhJ+/KEJ1kVXALo6xw0j8E8EhJFwUD4bVEuqvy79J5vm5mYUAZ4RHx+PyKaMX3YHvxEONfzBzc0t/NatW8a0qnh+ARDl0fn+fjk+0+GXHcUn8xA2wlGSFocjnlpgr0U7rw2Cv729HXx8fHIfPHjg2dbWlsEnJqFOg+8Ih/qYo6Hh5OLicuvmzZtG9Hx0kHxKSQt8d78cGtt4/orKT7YV6bkIE+GgYMxjnlpgq0mfbJCvzaxZswpiYmJmVFVV/clvm4AvCecz6YwcO3bspUuXLhmIidGfZkZFGyy9Wwo1LZh0+G2T8WI+wkI46nIScHKiFpipStOFsbu7mxqQGRoa6s+u0rx0B2VQgP43mUGF7BTX0tIa7e3tHXjixAm60eVo3MyqNlgaUYadA9lpBAHVJQyEo6MgCacmaoGhEs2Qw78stGLFiqLbt28vKSws5HgiLWa3BV8TDlqUQe/ePnNmzjxMxhsZyaNaV8vvlUEODoNgdk8IRT9BJxwUroBuo7RJOPUhg61du7Y0JCRkZXZ2dhA/G5DvCQeBZ2xs7Dd9+vTde/fu1SEDJoq9WhNdDolFOOCTDF7CKCPIhONiJAe73TRAgU5s1Be7rV279uOteIAjEgAADQBJREFUW7c25eXlned3WwoE4SAQ9fX1p40bN+7QqVOn9Mic6SD/nP97WoVTW/D7DuTQ/ASVcFD9qA3DVEFCnP5XE53ZLF++/OOdO3fWFhYWXuEQlGxVS39VbB2ONWUoGfu4ceNOBQYGGtGrAIFGQt45p17UwrEXNdR/4yY6CAga4SB+2TBUDWbaKZIyEqr/HRAQUBQTE/NtcXFxGKlOfCAkUISD8FJTUxvq5uZ26cqVKyZSUuQO05CD4I+PKvG1OR9sOG5NQZAIBzn07XVXBxcj+s6uCD9ENnPnzs2Ljo4OqKioiOUWpuwYR+AIBy1aSUnJeeTIkUHXr183kZWl73WJ+uRUt8GaqArIrcU5ddixcfhdh6AQDkov8ZuHJpiqkPvjiTyIp0+fnvvo0aPpTU1NL/jdDv+dn0ASDloE8kh2dHS8GRISYq2uTj+tIuqDStBseVIJUdl8EVYiaHtFoOYrCISD6kZtHqFON3HWF+ArKirA29s7Izk52Zubic/ZaXiBJZzPIKg7OjrevXb9upOlhQXtdGefO6CznAupdXAosRqXFWbnTuIzXfxMONISYrB6kCrM6kPuvIb6hJ6T0zl16tQXKSkpXvwUG8Wo2QWdcNB6ZWxtbYOPHj06auTIkeTerwDgTVkrbHpYAYV1HYxihuUFAAF+JRwTFSnYO1qDVB6bLzDHx8c3L1iw4ElGRoYPADQLAPyEUxQGwkGLE+vTp8/htWvX+vr5+dHNHPgFjYa2LtgTVwVhmY2CbEM89x4Q4EfCQVUVNgxVBXRITLZduXKl5ueffw7Nzc1dwA/5bMjOm0hOWAiHuj4LC4uffHx8lu/atUuHzLX5F1Ai3jfAjrhqHHHO6m7io/78RDgoO9/GYaowwUKBNELoJmr9+vXIx+ZQVlbWHtId+VxQqAgHYa2iojJq4MCBx69du2apqkq31t5f5imsa4efYyshpaSVz02Gp0cGAX4hHFdjefhxmCpo9aKfd/jLuqqqqmCOr292akrK4pKSkkdk1isoMkJHOJ+B17S3tw89c+aM08CBA8ndN352FAzJaIB98fhpR1A2MNE8eU04KKXEykGq4GNN/qkGrSUlJaVz8eLFqcnJyRMAoETQ7fDf+Qsr4aB1Svbp0+fE8uXLp3zzzTcqjBiuorETdj2vgphcfH3OCG78JMtLwvEw6wUbh6qSKt3yT8wCAwOrt2/fHpWbmzuPF0XquGE/YSYcKn4mJibfubq6bjhy5IihnBz9PLD/BD0mtxF2PK2GqpZObtgCj8FGBHhBOHNDSmChgxKMMiHnMfxluY2NjfDtt9/mP336dEdeXt5JNsLAd6qEnnA+I27q5OR05eTJk/379etH+hUL9a1r6YKjL2rgelo99tvhu+1LPCFeEE5rRzegJOeMtBcvXnQsW7YsLTU1dYagOvMxsl7G0GFEM//JStra2v7h5eU1fefOnRqM3GKhpXyobYcD8dXwJF+g3SD4zyocmhEvCIeRpaBI771795YeP348Mi8vbzEAtDHSX1BlRYlwqDbS0NBwdXBwOHz+/Hk7fX19hu32NL8J9j2vhnzsMMgwdtzswM+EU1paCgsWLMhMTk7+vqysLJKbuPB6LJEjnM+Aq9rZ2V1Zs2bNkICAANKOgl+MhcrS3EhrgNOvaqEan+/weg/3OD6/Es6ZM2dqfvvtt+dpaWm+AFDDl+BxcFKiSjhUSPX09Gb26dNny8mTJ6169+7NMBao8uf1d/VwNqUW1zvn4CZlRjW/EU5eXl734sWLcygUyv8VFBScY2ZNwtCH4S+ZMCz6P2tQtra2PjJ79uyxP/30kyaZsjT/xQBFoaMnnjOvaqEOl6rhiy3CL4SDyrYcOXKk/Pjx44/T0tJQbe86vgCIR5PAhPMZeHV19dFmZmYHTp06ZdO3b1+GbrK+2A7daF15Ww/X0urxqxaPNvSXYfmBcJAT3/fff5+ZmZm5vLS0NIbHkPDF8Jhw/m0GWSsrqwMuLi5e+/btM2QkNOKfatAZz4OcRjjzqg5Xj+DRNucl4aDQhDVr1iC/mpDs7Oz1AIDjZT7vA0w4PX8h9Pv27Xts6tSpwzZu3KgmLU2/CFlParq6AeIKmuDq2wZ4Xoiv07nJPbwgnI6ODjh+/Hj18ePH3757924+AORxc82CMBYmHBpWUlRUHGZubv7b1m3b+nhNnMiY++h/9KI6WXczG+FGWj0+YObCN4PbhBMTE9Py888/U9LT01fza9VLLsBOdwhMOHQhAnFjY+MV1tbWS/fs2WPet29f8slMetCNXreQL8+t9EaIL2zG1STo48+UBLcIB53TbNy4MZtCoRzLy8v7Qxhy1jAFOMlOmHBIAgUA8qampuvNzMxm7t+/35JV4kHDoqeeiMxGuJ/VCEX1OPMgeVPQl+Q04WRkZHRt2bIlKzk5OTQ7O3sLSplNf1ZYAhMO43ugl6Wl5VZzc3Ov3w8eNCebS5neMIh8orObIDyzAXsx0wOLxOecIhzkT7N9+/bsuLi4KAqFsknUr7lJmOJfIphwGEXsb3llc3PznQOcnMZt+fVXE2tra7ZgiQ6a35a1UlNjoLitXFwjnSELWatLw3AjOZjfVwkUZVh6+/3XuOiJ5tdff819+fLl/aysrJ8AoJahiWFhKgJs+ZKIOJZKFhYWa/X09KauXr3afNKkScxdaRGAWNzQAfEFLRBX2AzxBc2AvJtx+xuBXtLiMEhfFlwM5MDFUBa0FMhn1iODY1xcXPuOHTs+pKWl3f/w4cNmAKgm0w/L9IwAJhz27QwpExMTPwMDg2/9/f0t5s+frygpyd7Njw6cX5e2wsuPrZBS+ukHeTmLUpOTFIMBerIwUFcWBurJgLWGDJAow80QRMg7ODw8vOnQoUM5WVlZF/Pz89FhcAtDSrBwjwhgwmH/xhBTUVHxMjU13TBx4kTzZcuWaWlra7N/FHQd0g2QWdVGzcOMyOdNaSv18FlYnoEQkZiqSkFfLRmw05QBe21pMFORAgl2M8xn65SUlKAwhNL79+9nZWdn76murg7/nHmWI/YTRaWYcDhrdXMbG5s1urq6o5YsWdJ76tSpsux+6vnv9NETT3Z1O2RWtkNmdRtkVrXD+4o2vo/xUpEVB0t1abBQlQZzNSnqj5mqFEMlVZgxJXqaiYmJaTt58mR+VlZWQkpKylYAyGRGF+5DHwFMOPQxYoeElJaW1gxDQ8NvRowY0XvlypVGRkZG7NBLWgeK8ypqaIfi+g4oru+kPglR/93QAdXNXVDT2gmdHHo7Qw8kGnISoKkgAZrykqAlJwH6SpJgoCQBBkpSoKcoSbrcLekF0xHMy8uDw4cPF8fFxeUVFhYeKywsvCaseYTZhRk79GDCYQeKjOkwsrS0RIfMLuPGjTOcN2+ehp6eHmMaOCRd39YFNS2dUNvSRfWGbunogoa2buqrGyKjxs/nRS0d6P91/+vpA9VeQsSiKCMGCtLif/9IiVOTiXPoLYghJIqKiuD8+fPlUVFRBSUlJc8oFMo+AChkSAkWZgkBTDgswcdyZ5M+ffos1tHRcXN3dzf19/fX1NHRYVkpVvA3ApWVlRAcHFwZGhpamJ+fn/z69esDAJCOMeINAphweIN7T6PaW1lZ/aCvr99vwIABujNnztTt16+fGKO5l/lnObyZCTqTefnyZVdQUFDJq1evPn78+PFlenr6IQB4x5sZ4VH/iQAmHP7cD7qamprT9PT0JhgZGelPmTLFYOLEiSoaGhr8OVsez6qiogIiIiIawsLCSgoLCwvLy8vv5OTkXBXGQnI8hprl4THhsAwhxxVIAMAQKysrPy0tLVt9fX3t0aNHa7q6uiqZmZlxfHB+HCArKwseP35c9+DBg/KioqKS8vLydAqFgtJ2/gkAuIgYPxrt85ww4fCxcQimhrwJ+1laWvooKSk5a2tr6zk7O6sNHTpUo2/fvhJaWlqCtyIaMy4rK4PU1NTO+Pj4isTExKrS0tLimpqahKysrBAAeAUAOOpVgCyOCUeAjEVjqsYSEhL9jYyMXJWUlCw0NDTU9PX11YcPH67er18/FVNTU2A2eyG34EFZ8nJychC5NCYkJNQUFRVVVFZWVre2tmbm5uY+qK2tTcIJrbhlDc6NgwmHc9jyWjOqa2yrp6c3WFFR0VFeXt5A6XNTVVVVsLGx6WVjY6OipaUlpa6uDuhHTU0NxMTYuyVQwTd0U/Tlp6ysrD0jI6M6PT29qbq6uqHuc2tpaSmorq5OKSkpSfh8wItDCXi9gzgwPnt3FwcmiFVyBAGUJB55HhqqqKgYq6urG8rKyhqIiYlpycnJycp9arISEhLinZ2d8srKyu0NjY0y8nJykpKSkt0tLS2yaFaysrItHR0dYk3NzR0KvXq11tbWSklISDR1dnZ2NTc3tzR/ai1dXV2lra2tRZWVlfk1NTUo7WbB5592jqwOK+VbBP4fMHS/xH4AO18AAAAASUVORK5CYII="
      },
      {
         "uuid":"49DAC734-24C7-49F5-AD9E-77B7D71B6AAE",
         "url":"data:image/png;base64,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"
      },
      {
         "uuid":"B32EDE40-B88B-4A32-A120-A4229D5B45DF",
         "url":"data:image/png;base64,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"
      }
   ],
   "object":{
      "uuid":"C7CDA5E6-50C0-4352-8428-C3F6EF1A06DC",
      "type":"Group",
      "layers":1,
      "matrix":[
         1,
         0,
         0,
         0,
         0,
         1,
         0,
         0,
         0,
         0,
         1,
         0,
         0,
         0,
         0,
         1
      ],
      "children":[
         {
            "uuid":"68730F9E-29FC-4F56-9F7D-1B47B8B310CD",
            "type":"Group",
            "layers":1,
            "matrix":[
               0.9915593810403823,
               0,
               -0.12965336043008674,
               0,
               0,
               1,
               0,
               0,
               0.12965336043008674,
               0,
               0.9915593810403823,
               0,
               -8.07724374665959,
               0,
               15.357012151841445,
               1
            ],
            "children":[
               {
                  "uuid":"11A71FED-D121-464F-B5E1-3738C77E8513",
                  "type":"Mesh",
                  "layers":1,
                  "matrix":[
                     1,
                     0,
                     0,
                     0,
                     0,
                     1,
                     0,
                     0,
                     0,
                     0,
                     1,
                     0,
                     0,
                     2.5,
                     0,
                     1
                  ],
                  "geometry":"95951741-EC39-4B7A-B43F-1EE12C35A40D",
                  "material":"310799EB-2119-4837-A613-E62FA5D08D4B"
               },
               {
                  "uuid":"DFDCA4E4-B94D-44E5-BAFF-02BC3299ACC0",
                  "type":"Mesh",
                  "layers":1,
                  "matrix":[
                     2.220446049250313e-16,
                     1,
                     0,
                     0,
                     -1,
                     2.220446049250313e-16,
                     0,
                     0,
                     0,
                     0,
                     1,
                     0,
                     5,
                     4.85,
                     0,
                     1
                  ],
                  "geometry":"8E5ED46C-34F8-4365-9D38-34077003DEDA",
                  "material":"9E79A6DE-977E-4BB9-9E1E-7848592EE1DC"
               },
               {
                  "uuid":"811DCF19-09E0-47DA-8804-F4E74FE8E81A",
                  "type":"Mesh",
                  "layers":1,
                  "matrix":[
                     2.220446049250313e-16,
                     1,
                     0,
                     0,
                     -1,
                     2.220446049250313e-16,
                     0,
                     0,
                     0,
                     0,
                     1,
                     0,
                     5,
                     4.25,
                     0,
                     1
                  ],
                  "geometry":"5929A8D1-04BC-4113-ACB1-091475F779BC",
                  "material":"370851F5-E085-4130-B241-641FC4E877C6"
               },
               {
                  "uuid":"497EC114-A11B-45D7-9FD6-6CB3EC7A1112",
                  "type":"Mesh",
                  "layers":1,
                  "matrix":[
                     1,
                     0,
                     0,
                     0,
                     0,
                     1,
                     0,
                     0,
                     0,
                     0,
                     1,
                     0,
                     "10",
                     2.5,
                     0,
                     1
                  ],
                  "geometry":"F3E60C87-7D20-42A3-946B-4C8E5DA28E03",
                  "material":"CB6D3EDA-FACF-48F3-9660-7C2286E30B12"
               },
               {
                  "uuid":"7769C71A-2117-4498-B1A8-C1DBC2697FA2",
                  "type":"Group",
                  "layers":1,
                  "matrix":[
                     1,
                     0,
                     0,
                     0,
                     0,
                     1,
                     0,
                     0,
                     0,
                     0,
                     1,
                     0,
                     0,
                     0,
                     0,
                     1
                  ],
                  "children":[
                     {
                        "uuid":"CD18F618-602E-44FA-8C8C-38844CDFD4D8",
                        "type":"Group",
                        "name":"4.1.3",
                        "layers":1,
                        "matrix":[
                           1,
                           0,
                           0,
                           0,
                           0,
                           1,
                           0,
                           0,
                           0,
                           0,
                           1,
                           0,
                           1.0542456568370677,
                           4.24250438358214,
                           0,
                           1
                        ],
                        "children":[
                           {
                              "uuid":"D20F837A-4814-46C0-AC0A-3CAC7BA518D2",
                              "type":"Mesh",
                              "layers":1,
                              "matrix":[
                                 1,
                                 0,
                                 0,
                                 0,
                                 0,
                                 1,
                                 0,
                                 0,
                                 0,
                                 0,
                                 1,
                                 0,
                                 0,
                                 0,
                                 0,
                                 1
                              ],
                              "geometry":"ECC7ECA1-2463-4167-BAE9-943BDC2FE3B2",
                              "material":[
                                 "F3094C13-1649-4708-8F32-F95C2D5E0242",
                                 "EF2BDAE6-12C7-4D2D-9147-8403F55EAC54"
                              ]
                           }
                        ]
                     },
                     {
                        "uuid":"551A24C0-E9C9-4562-A368-019346160BD2",
                        "type":"Group",
                        "name":"5.2",
                        "layers":1,
                        "matrix":[
                           1,
                           0,
                           0,
                           0,
                           0,
                           1,
                           0,
                           0,
                           0,
                           0,
                           1,
                           0,
                           4.555513288730287,
                           4.579790849202409,
                           0,
                           1
                        ],
                        "children":[
                           {
                              "uuid":"1E194640-D44B-4269-A9D1-6DBD05835756",
                              "type":"Mesh",
                              "layers":1,
                              "matrix":[
                                 1,
                                 0,
                                 0,
                                 0,
                                 0,
                                 1,
                                 0,
                                 0,
                                 0,
                                 0,
                                 1,
                                 0,
                                 0,
                                 0,
                                 0,
                                 1
                              ],
                              "geometry":"C1B38CC7-55CE-4490-80C4-F857AA39E312",
                              "material":[
                                 "5730E01B-168E-40EF-92E0-C2DD276A3321",
                                 "67214B4F-CA8B-438B-8AD0-3E5A8E13B97C"
                              ]
                           }
                        ]
                     },
                     {
                        "uuid":"8D96B6E1-DD43-4C82-ABAA-7B76C4032016",
                        "type":"Group",
                        "name":"6.1",
                        "layers":1,
                        "matrix":[
                           1,
                           0,
                           0,
                           0,
                           0,
                           1,
                           0,
                           0,
                           0,
                           0,
                           1,
                           0,
                           8.194098136769748,
                           4.669739558851743,
                           0,
                           1
                        ],
                        "children":[
                           {
                              "uuid":"A0119F27-0082-44C1-984B-672ACEFCB88C",
                              "type":"Mesh",
                              "layers":1,
                              "matrix":[
                                 1,
                                 0,
                                 0,
                                 0,
                                 0,
                                 1,
                                 0,
                                 0,
                                 0,
                                 0,
                                 1,
                                 0,
                                 0,
                                 0,
                                 0,
                                 1
                              ],
                              "geometry":"8BECD2AE-AB95-4A8E-AC77-4AF685295EBB",
                              "material":[
                                 "114C9810-879E-4E7F-BDCB-6FF06E89BF38",
                                 "A0EFB218-028A-4E21-8990-F71D917F68F5"
                              ]
                           }
                        ]
                     }
                  ]
               }
            ]
         }
      ]
   }
};


MapGL.geoJSONLayer( json, {

    output: true,
    interactive: true,
    style: ( feature ) => {

        // let value = feature.properties.OKATO
        // // var color = colorScale(value).hex()
        // // var color = '#4B70F5'
        // let color = MapGL.Util.Color.random()

        return {

            color: '#ff0000',
            outline: true,
            outlineColor: '#580000',
            lineColor: '#0000ff',
            lineRenderOrder: 1,
            pointColor: '#00cc00'

        }

    },

    pointGeometry: function ( feature ) {

        // var geometry = new THREE.SphereGeometry(20, 16, 16);
        // return geometry;

        return new THREE.SphereGeometry(200, 16, 16);

    },

    onEachFeature: ( feature, layer ) => {},

} ).addTo( map ).then( () => {

    console.log('Added GeoJSON Layer to world.');

} );

// console.dir( MapGL );
// MapGL.PointLayer([ 37.3164129248322, 56.3479853123751 ]);

// Buildings from Tilezen
MapGL.mvtTileLayer('https://tile.nextzen.org/tilezen/vector/v1/all/{z}/{x}/{y}.mvt?api_key=-P8vfoBlQHWiTrDduihXhA', {

    workers: false,
    interactive: false,

    style: function ( feature ) {

        var height;

        if (feature.properties.height) {

            height = feature.properties.height;

        } else {

            height = 10 + Math.random() * 10;

        }

        return {

            height: height,

        };

    },

    layers: ['buildings'],

    // TODO: Work out why this isn't filtering out points
    filter: function ( feature ) {

        // Don't show points
        return feature.geometry.type !== 'Point';

    },

} ).addTo( map ).then(function() {

    console.log('Added MVT Tile Layer to world.');

} );



MapGL.threeJSONLayer( object, {

    output: true,
    interactive: false,

} ).addTo( map );


// Moscow administrative boundary polygons
// MapGL.geoJSONLayer('https://gist.github.com/sermonis/640e1902c850d49fe05c46f9a1eb23fc/raw/cff7940eeeaee4c94b895cc1fc8a738c2729fe52/moscow-ao.geojson', {
// Moscow munitipal boundary polygons
// MapGL.geoJSONLayer( 'https://gist.github.com/sermonis/0ca99dc8e4e4c4078402f35abceb9b9c/raw/f40c53afe32d91788d4b8c240261efec650d4809/moscow-mo.geojson', {
//
//     output: true,
//     interactive: true,
//     style: ( feature ) => {
//
//         let value = feature.properties.OKATO
//         // var color = colorScale(value).hex()
//         // var color = '#4B70F5'
//         let color = MapGL.Util.Color.random()
//
//         return {
//
//             color: color,
//             // color: '#4B70F5',
//             opacity: 0.1,
//             transparent: true,
//             outline: true,
//             // outlineColor: '#fff',
//             outlineColor: '#545672',
//             outlineWidth: 3,
//             // height: 5,
//
//         }
//     },
//
//     onEachFeature: ( feature, layer ) => {
//
//         layer.on('click', (layer, point2d, point3d, intersects) => {
//
//             let id = layer.feature.properties.NAME
//             // var id = layer.feature.properties.ABBREV
//             let value = layer.feature.properties.OKATO
//
//             console.log(id + ': ' + value, layer, point2d, point3d, intersects)
//
//         })
//
//         layer.on( 'hover', ( layer, point2d, point3d, intersects ) => {
//
//             // console.dir(layer)
//             // console.dir(point2d)
//             // console.dir(point3d)
//             // console.dir(intersects)
//
//             // console.dir(intersects[0])
//             //
//             // let mesh = intersects[0].object
//             //
//             // console.dir(mesh)
//             // mesh.visible = false
//
//             if ( intersects[ 0 ] ) {
//
//                 // material = new THREE.MeshBasicMaterial({
//                 //   color: 0xff0000,
//                 //   // TODO: Remove this by implementing logic to make points clockwise
//                 //   side: THREE.BackSide,
//                 //   depthWrite: false,
//                 //   transparent: true
//                 // })
//
//                 // console.dir(layer)
//
//                 // console.log('hover', 'object', 'material', intersects[0].object.material)
//                 // console.log('hover', 'object', 'material', intersects[0].object.material.wrapRGB)
//
//                 // intersects[0].object.visible = false
//                 // console.dir(world._engine._scene)
//                 // console.log('hover', 'object', 'defaultAttributeValues', intersects[0].object.material.defaultAttributeValues)
//                 // intersects[0].object.material.defaultAttributeValues.color = [0, 0, 0]
//                 // console.log('hover', 'object', 'geometry', intersects[0].object.geometry)
//                 // console.log('hover', 'object', 'geometry', intersects[0].object.geometry)
//                 // console.log('hover', 'object', 'geometry', intersects[0].object)
//
//                 // -------------------------------
//                 // -------------------------------
//                 // -------------------------------
//
//                 // TODO: change material directly in _scene.childen
//
//                 // -------------------------------
//                 // -------------------------------
//                 // -------------------------------
//
//                 // let geometry = intersects[0].object.geometry.clone()
//                 // let material = MapGL.Util.Color.material()
//                 // let mesh = MapGL.Util.Color.mesh(geometry, material)
//
//                 // -------------------------------
//                 // -------------------------------
//                 // -------------------------------
//
//                 // mesh.position.set(intersects[0].object.position.x, intersects[0].object.position.y, intersects[0].object.position.z)
//
//                 // mesh.position.copy(intersects[0].object.position);
//                 // mesh.scale.copy(intersects[0].object.scale);
//                 // mesh.updateMatrix()
//                 //
//                 // world._engine._scene.add(mesh)
//                 //
//                 // console.log('hover', 'object', 'mesh', mesh)
//
//                 // -------------------------------
//                 // -------------------------------
//                 // -------------------------------
//
//                 // intersects[0].object.position.x += 20
//                 // intersects[0].object.position.y += 20
//                 // intersects[0].object.position.z += 20
//                 //
//                 // intersects[0].object.scale += 20
//                 //
//                 // intersects[0].object.updateMatrix()
//
//                 // -------------------------------
//                 // -------------------------------
//                 // -------------------------------
//
//                 // world._engine._scene.remove(intersects[0].object)
//
//                 // console.dir(world._engine)
//                 // world._engine._renderer.state.reset()
//                 // world._engine._renderer.render()
//
//                 // world._engine.update()
//
//                 // console.log(world._engine)
//                 // console.log(world._engine._domScene3D)
//
//                 // let $_obj = world._engine._scene.children.find(item => console.dir(item))
//                 // let $_obj = world._engine._scene.children[1].chifind(item => console.dir(item))
//
//                 // ._scene.children
//                 // world._update()
//
//                 // intersects[0].object.material = MapGL.Util.Color.material()
//                 // intersects[0].object.updateMatrix()
//
//                 // console.log('hover', 'object', 'material.uniforms', intersects[0].object.material.uniforms)
//
//                 // intersects[0].object.material.opacity = 0
//                 // intersects[0].object.material.color.set('#000')
//
//                 // mesh.matrixAutoUpdate && mesh.updateMatrix()
//                 // combinedGeom.merge(mesh.geometry, mesh.matrix)
//
//             }
//
//             // intersects[0].object.material.transparent = true
//             // intersects[0].object.material.color = 'red'
//             // intersects[0].object.material.opacity = 0
//
//             // intersects[0].object.material.needsUpdate = true
//
//             // intersects[0].object.material.color = 'red'
//
//             // intersects[0].object.material.setHex(0xff0000)
//             // intersects[0].object.material.emissive.setHex( 0xff0000 );
//
//             // world.terminate()
//
//             // console.dir(intersects[0].object)
//             // intersects[0].object.visible = false
//
//             // console.dir(intersects[0].object.material.emissive)
//
//             // layer._options.style.transparent = false
//             // layer.hide();
//             // console.dir(intersects)
//
//             // let id = layer.feature.properties.NAME
//             // var id = layer.feature.properties.ABBREV
//             // let value = layer.feature.properties.OKATO
//
//             console.log( 'hover', 'feature', 'NAME', layer.feature.properties.NAME );
//             console.log( 'hover', 'feature', 'OKATO', layer.feature.properties.OKATO );
//
//             // console.log(id + '!!!!!: ' + value, layer, point2d, point3d, intersects)
//             // console.log(id + '!!!!!: ')
//
//         })
//
//     }
//
// } ).addTo( world );
