---
layout: post
title: "Java to Scala 리팩토링 - Map"
excerpt: "Pattern Matching을 이용해서 간결하게"
date: 2018-06-14
tags:
  - scala
  - java
comments: true
---

## 코드 냄새 맡아보기 (Java)

```java
private void getSumByOwnWarehouse(List<Map<String, Object>> inventorySnapshotList, List<OwnWarehouse> warehouseLocList) {        
  for (Map<String, Object> owInventory : inventorySnapshotList) {
    Iterator<String> iterator = owInventory.keySet().iterator();

    while (iterator.hasNext()) {
      String aKey = iterator.next();

      if (aKey.startsWith("shelfQty_")) {
        for (OwnWarehouse ow : warehouseLocList) {
          String warehouseCode = ow.getWarehouseCode();

          if (aKey.endsWith(warehouseCode)) {
            ow.setSumAvlQty(ow.getSumAvlQty() + Integer.parseInt(String.valueOf(owInventory.get(aKey))));
            break;
          }
        }
      }

      if (aKey.startsWith("allocatedQty_")) {
        for (OwnWarehouse ow : warehouseLocList) {
          String warehouseCode = ow.getWarehouseCode();

          if (aKey.endsWith(warehouseCode)) {
            ow.setSumAlcQty(ow.getSumAlcQty() + Integer.parseInt(String.valueOf(owInventory.get(aKey))));
            break;
          }
        }
      }
    }
  }
}
```

- 반환형이 void이다.
  - 객체 내부의 상태를 변화시킨다. (사이드 이펙트)
- 컬렉션의 요소가 Map이다.
  - 구체적인 타입이 아니라, 뭐가 들어있는지도 모르고 안전하지도 않은 매직박스 같은 Map
- 무엇을 하려고 하는지를 표현하는 내용보다 제어코드가 더 많다 (verbose)
- 괄호와 세미콜론과 중첩된 메서드 호출에 정신이 없다 (verbose)

## 그래, 뭐하는 코드인가?

`Map<String, Object>` 안에 `<K, V>` 들이 아래처럼 들어가 있다.

```
shelfQty_DE := 100
allocatedQty_DE := 0

shelfQty_LA := 50
allocatedQty_LA := 50
```

키 값이 `shelfQty_` 와 `allocatedQty_` 로 시작하는 요소들을 `_???` 키값 뒷 부분이 같은 것 끼리 모아서 합산해야 한다.

하지만,

- Java라서 근본적으로 코드가 지저분하다.
- Map을 사용해서 코드가 더 더럽다.

## 스칼라

```scala
private def getSumByOwnWarehouse(
  inventorySnapshotList: Seq[java.util.Map[String, AnyRef]],  // !!! Map 좀 쓰지말자.
  warehouseLocList: Seq[OwnWarehouse]
): Unit = {
  val warehousesByWarehouseCode: Map[String, OwnWarehouse] = {
    warehouseLocList.groupBy(_.warehouseCode).mapValues(_.head)
  }
  val shelfQty = "shelfQty_(.+)".r
  val allocatedQty = "allocatedQty_(.+)".r

  for {
    owInventory <- inventorySnapshotList
    (key, value) <- owInventory.asScala
  } {
    key match {
      case shelfQty(warehouseCode) =>
        warehousesByWarehouseCode.get(warehouseCode).foreach { ow =>
          ow.sumAvlQty += String.valueOf(value).toInt
        }
      case allocatedQty(warehouseCode) =>
        warehousesByWarehouseCode.get(warehouseCode).foreach { ow =>
          ow.sumAlcQty += String.valueOf(value).toInt
        }
      case _ => ()
    }
  }
}
```

### 개선된 점

- 프로그램의 의도가 명확히 드러난다.
- 가독성 향상

## 한계점

- 한 번에 다 뜯어고칠 수 없어서, 어쩔 수 없이 반환형이 Unit이다. (Java의 void)
- OwnWarehouse의 프로퍼티를 수정하는 것도 일단 그대로 두었다.
