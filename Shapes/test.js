draw: function(){
gl.useProgram(this.program);
gl.bindBuffer(gl.ARRAY_BUFFER, this.positions.buffer);
gl.vertexAttribPointer(this.positions.attribute,
this.positions.numComponents, gl.FLOAT, gl.FALSE, 0, 0);
gl.enableVertexAttribArray(this.positions.attribute);
 
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer);
var count = this.numSides+2;
var offset = 0;
 
/*gl.drawArrays(gl.POINTS, 0, this.positions.count);*/
gl.drawElements(gl.TRIANGLE_FAN, count,
gl.UNSIGNED_SHORT, offset);
offset += 2*count;
count = this.numSides+2;
gl.drawElements(gl.TRIANGLE_FAN, count, gl.UNSIGNED_SHORT, offset);
offset += 2*count;
count = this.numSides*2+2;
gl.drawElements(gl.TRIANGLE_STRIP, count, gl.UNSIGNED_SHORT, offset);
 
}
};
