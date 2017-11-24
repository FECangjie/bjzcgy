import fetch from 'common/js/util/fetch'

  export function getData() {
    return 1
    // return await fetch("/data.json", {
    //   method:'get',
    //   body: {
    //     request_source: 'dmp',
    //     agent_ucid: 1
    //   }
    // })
    // runInAction(() => {
    //   console.log(data)
    //   debugger
    //   return data
    // })
  }
