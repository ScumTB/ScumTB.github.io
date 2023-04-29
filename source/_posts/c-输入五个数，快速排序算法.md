---
title: c++输入五个数，快速排序算法
date: 2022-04-29 18:27:43
tags:
---
> 快速排序

快速排序比冒泡排序具有更快的速度和更好的时间复杂度。快速排序的时间复杂度为O(nlogn)，而冒泡排序的时间复杂度为O(n^2)。对大量数据进行排序时，快速排序是更好的选择。

> 思路
* 找到一个中心轴pivot
* pivot不变，大于pivot的值放在中心轴右边，小于pivot的值放在中心轴左边
* 下一步，左边右边分开找中心轴，继续上面步骤
* 递归,直到一边的元素剩为1 

> 代码 

```
#include <iostream>
#include<string>
using namespace std;

/*数组被分成了两个部分，左边是小于枢轴值的元素，右边是大于等于枢轴值的元素*/
void quickSort(int arr[], int left, int right) {
    int i = left;
    int j = right;
    int tmp;
    int pivot = arr[(left + right) / 2];
    while (i <= j) {
/*从左向右移动，直到找到一个大于或等于枢轴值的元素*/
        while (arr[i] < pivot)
            i++;
/*从右向左移动，直到找到一个小于或等于枢轴值的元素*/
        while (arr[j] > pivot)
            j--;

        if (i <= j) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
        }
    }
/*递归，每一部分都进行上述步骤*/
    if (left < j)
        quickSort(arr, left, j);
    if (i < right)
        quickSort(arr, i, right);
}

int main() {
    int arr[5];
    cout << "请输入五个整数：" << endl;
    for (int i = 0; i < 5; i++) {
        cin >> arr[i];
    }
    quickSort(arr, 0, 4);
    cout << "排序后的结果为：" << endl;
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}

```
> 参考
* https://www.bilibili.com/video/BV1at411T75o/?spm_id_from=333.337.search-card.all.click 
* https://blog.justforlxz.com/2018/11/11/quick-sort-for-cpp/ 


