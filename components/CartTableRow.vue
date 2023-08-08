<script setup>
defineProps({
    guitarName:String,
    imagePath:String,
    type:String,
    price:Number,
})

</script>

<template>
    <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img :src="imagePath" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{{ guitarName }}</div>
              <div class="text-sm opacity-50">In Stock</div>
            </div>
          </div>
        </td>
        <td>
          <span class="badge badge-ghost badge-sm">{{ type }}</span>
        </td>
        <td>R{{ price }}</td>
      </tr>
</template>