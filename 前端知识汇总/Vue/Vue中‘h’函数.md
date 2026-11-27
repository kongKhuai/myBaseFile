```
 const h = this.$createElement

          const buttons = list.map((item, index) => {

            return h('el-button', {

              props: {

                type: 'primary',

                size: 'medium'

              },

              style: {

                marginRight: index < list.length - 1 ? '10px' : '0'

              },

              on: {

                click: () => {

                  this.$msgbox.close()

                  this.jumpToDetailPage(data, item)

                }

              }

            }, names[item] || item)

          })

  

        this.$msgbox({

          title: '请选择校核类型',

          message: h('div', { style: { textAlign: 'center', padding: '20px 0' } }, buttons),

          showConfirmButton: false,

          showCancelButton: true,

          cancelButtonText: '取消'

        }).catch(() => {

          // 取消选择

        })
```