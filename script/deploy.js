/* eslint-disable */
const fs = require('fs');
const pt = require('path');
const OSS = require('ali-oss');

// AK名称: ali-ak-pjxBriTQ-2021032319
// secret_id：LTAI5tEQM7prtz2Sg8MHRju5
// secret_key：fEftiGJlvJeqVdizjvSuGUluZY78kH
const client = new OSS({
    accessKeyId: 'LTAI5tRPvJcM9564mAUgGQ2u',
    accessKeySecret: '6ib4mY8qiQtknJVoz87Ect60FeCBzG',
    bucket: 'h5-test-kousuan100-com',
    region: 'oss-cn-beijing',
    timeout: 120000,
});

async function uploadToOss (file) {
    try {
        // 'object'表示上传到OSS的object名称，'localfile'表示本地文件或者文件路径。
        const { object, localfile } = file;
        await client.put(object, localfile);
        await client.head(object);
        return true;
    } catch(e) {
        console.error(JSON.stringify(file, null, 4), e);
    }
    return false;
}

function addFileToOSSSync(src = '') {
    const files = [];
    const publicPath = './build/';
    const docs = fs.readdirSync(publicPath + src);
    // eslint-disable-next-line no-restricted-syntax
    for (const file of docs) {
        const path = pt.join(pt.join(publicPath, src), file);
        const st = fs.statSync(path); 
        if (st.isDirectory()) {
            const arr = addFileToOSSSync(pt.join(src, file));
            files.push(...arr);
        } else {
            files.push(pt.join(src, file));
        }
    }
    return files;
}

async function uploadFilesToOss () {
    console.log('上传开始');
    const parentDir = './build/';
    const prefixPath = 'management-control/';
    const files = addFileToOSSSync();
    // eslint-disable-next-line no-restricted-syntax
    for (const file of files) {
        const extname = pt.extname(file);
        if (extname !== '.map') {
            // eslint-disable-next-line no-await-in-loop
            const result = await uploadToOss({
                object: pt.join(prefixPath, file).replace(/\\/g, '/'),
                localfile: pt.join(parentDir, file),
            });
            if (!result) {
                console.error('上传失败，终止上传');
                break;
            }
        }
    }
    console.log('上传成功');
    return Promise.resolve();
}

module.exports = uploadFilesToOss;
