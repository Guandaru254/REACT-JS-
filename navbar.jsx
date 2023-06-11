//USING FOR LOOP
<tbody>
    for (var i=0; i < items.length; i++) {
        <TableRow obj={items[i]} key={i}>
    }
</tbody>

//USING map function
<tbody>
    {items.map(function(item, index) {
        return <TableRow obj={item} key={index} />;
    })}
</tbody>

//ES6 SYNTAX
<tbody>
    {items.map((item, index) => <TableRow obj={item} key={index} />)}
</tbody>