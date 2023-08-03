const menuItems = [
  {
    label: 'Main',
    items: [
      {
        label: 'All Notes',
        icon: 'fa-solid fa-file'
      },
      {
        label: 'Tasks',
        icon: 'fa-solid fa-square-check'
      },
      {
        label: 'Images',
        icon: 'fa-solid fa-image'
      }
    ]
  },
  {
    label: 'Favorites',
    items: [
      {
        label: 'Work',
        icon: 'fa-solid fa-file'
      },
      {
        label: 'Personal',
        icon: 'fa-solid fa-file'
      }
    ]
  },
  {
    label: 'Folders',
    items: []
  }
]

const defaultTreeProps = {
  children: 'children',
  label: 'name'
}

export const config = {
  menuItems,
  defaultTreeProps
}
