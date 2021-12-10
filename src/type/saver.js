const v_fs = require('v_file_system');

const basic_data = JSON.stringify({ name: "yea", timestamp: Date.now() });

module.exports =  {
    oneForAll: async (type) => {
        return await v_fs.write(`${process.v.data_dir}/index.json`, basic_data) ;
    },

    perType: async (type) => {
        return await v_fs.write(`${process.v.data_dir}/${type}.json`, basic_data);
    },

    perItem: async (type) => {
        return await v_fs.mkdir(`${process.v.data_dir}/${type}`);
    },
};
