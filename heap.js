
// js实现最小二叉堆，并有接口
var arr_list=[1,5,3,8,8,5,6];

var MinHeap=function (a,i,n) {
    var j=2*i+1;
    var temp=a[i];
    while(j<n){
        if(j+1<n && a[j]>a[j+1]){
            j++;
        };
        if(a[j]>=temp){
            break;
        }
        a[i]=a[j];
        i=j;
        j=2*i+1;
    }
    a[i]=temp;
    // return a;
}

//初始化堆
var InitHeap=function (a) {
    var n=a.length;
    for(var i=parseInt(n/2)-1;i>=0;i--){
        MinHeap(a,i,n);
    }
}

//排序
var sortHeap=function (a) {
    var n=a.length;
    for (var i = n-1; i >=0; i--){
        process.stdout.write(a[0]+' ');
        var temp=a[0];
        a[0]=a[i];
        a[i]=temp;
        MinHeap(a,0,i);
    }
    process.stdout.write('\n');
}


var Heap=function (arr) {
    this.init=function (arr) {
        //	1、堆化数组，建立最小堆，堆中根结点数据是堆中最小的数据。
        InitHeap(arr);
    }
    // 插入一个新的元素，并堆化数组
    this.insert=function (params) {
        var n=arr.length;
        n++;
        arr[n-1]=params;
        InitHeap(arr);
    };
    //删除堆顶元素，并堆化数组
    this.delete=function () {
        arr.splice(0,1);
        InitHeap(arr);
    }
    //返回堆顶元素
    this.get=function () {
        process.stdout.write(arr[0]+'\n');
    };
    //打印数据,先序遍历
    this.preprint=function () {
        var i=0;
        var p=function (i) {
            // console.log(arr[i]);
            process.stdout.write(arr[i]+' ');
            var left=2*i+1;
            var right=2*i+2;
            if(left<arr.length){
                p(left);
            }
            if (right<arr.length) {
                p(right);
            }  
        }
        p(i);
        process.stdout.write('\n');
    };
    //正常打印数据
    this.print=function () {
        for(var e of arr){
            process.stdout.write(e+' ');
        }
        process.stdout.write('\n');
    };

    //排序
    this.sort=function () {
        sortHeap(arr);
    }
    this.init(arr);
    return this;
}

var heap=Heap(arr_list);
heap.print();
heap.insert(4);
heap.print();
heap.sort();
heap.print();