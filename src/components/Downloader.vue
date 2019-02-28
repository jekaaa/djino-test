<template>
    <div class="downloader">   
        <div class="container__icon">
            <div class="icon" :class="iconClass"></div>
        </div>
        <label class="downloader__label">
            <input type="file" :disabled="disabled"  @change="upload($event.target.files)"/>
            <div class="downloader__text">
                <span :class="{ decoration }">{{ text }}</span>
                <span class="ghost__text">{{ fileInfo }}</span>
            </div>
        </label>
        <div class="status" :class="statusClass">{{ status.text }}</div>
    </div>
</template>

<script>
import { 
    DEFAULT_TEXT, 
    DOWNLOAD_TEXT, 
    SUCCESS_TEXT, 
    DOWNLOAD_ICON, 
    PRELOADER_ICON, 
    WAIT_ICON, 
    SUCCESS_ICON,
    SUCCESS_STATUS,
    WAIT_STATUS,
    ERROR_STATUS,
    SIZE_TEXT
} from "@/const/main"

export default {
    data() {
        return {
            decoration: true,
            icon: DOWNLOAD_ICON,
            text: DEFAULT_TEXT,
            status: '',
            fileInfo: SIZE_TEXT,
            disabled: false
        }
    },
    methods: {
        getStatus() {
            let statuses = [ SUCCESS_STATUS, ERROR_STATUS ];
            let randomIndex = Math.round(Math.random());
            return statuses[randomIndex];
        },
        async timeout(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        },
        getSizeFile(size) {
            let prefix = 'Кб';
            size /= 1024;
            if(size >= 1024) {
                size /= 1024;
                prefix = 'Мб';
            }  
            return `(${size.toFixed(0)} ${prefix})`;
        },
        setArray(array) {
            array.map(item => {
                this[item.field] = item.value;
            });
        },
        downloading() {
            this.disabled = true;
            let options = [
                { field: 'icon', value: DOWNLOAD_ICON },
                { field: 'status', value: '' },
                { field: 'text', value: DEFAULT_TEXT },
                { field: 'fileInfo', value: SIZE_TEXT }
            ];
            this.setArray(options);
        },
        loading() {
            this.decoration = false;
            this.icon = PRELOADER_ICON;
        },
        wait(file) {
            let options = [
                { field: 'text', value: DOWNLOAD_TEXT },
                { field: 'icon', value: WAIT_ICON },
                { field: 'status', value: WAIT_STATUS },
                { field: 'fileInfo', value: `${file.name} ${this.getSizeFile(file.size)}` }
            ];
            this.setArray(options);
        },
        success() {
            let options = [
                { field: 'text', value: SUCCESS_TEXT },
                { field: 'icon', value: SUCCESS_ICON }
            ];
            this.setArray(options);
            this.disabled = false;
        },
        error() {
            this.decoration = true;
            let options = [
                { field: 'text', value: DEFAULT_TEXT },
                { field: 'icon', value: DOWNLOAD_ICON },
                { field: 'fileInfo', value: SIZE_TEXT }
            ];
            this.setArray(options);
            this.disabled = false;
        },
        validSizeFile(size) {
            if(size / 1024 / 1024 > 5) return false;
            return true;
        },
        async upload(files) {
            this.downloading();
            let file = files[0];
            this.loading();
            if(this.validSizeFile(file.size)) {
                await this.timeout(2000);
                this.wait(file);
                await this.timeout(2000);
                this.status = this.getStatus();
                if(this.status.text == SUCCESS_STATUS.text) this.success();
                else this.error();
            }
            else {
                this.status = ERROR_STATUS;
                this.error();
            }
        }
    },
    computed: {
        // ...mapGetters([
        //     'icon',
        //     'text',
        //     'status',
        //     'fileInfo'
        // ]),
        iconClass() {
            let result = {};
            result[this.icon] = true;
            return result;
        },
        statusClass() {
            let result = {};
            result[this.status.className] = true;
            return result;
        }
    }
}
</script>

<style>
.container__icon {
    width: 54px;
    height: 54px;
    border-radius: 5px;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ghost__text {
    color: #9d9d9d;
}
.status {
    padding: 5px;
    margin-left: auto;
}
.status__success {
    color: rgb(127, 160, 80);
}
.status__ghost {
    color: rgb(157, 157, 157);
}
.status__error {
    color: rgb(196, 53, 36);
}
.decoration {cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}
.downloader {
    display: flex;
}
.downloader__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0;
}
.downloader__label {
    display: flex;
    margin-left: 7%;
}
.downloader__label input {
    display: none;
}
@keyframes spin {
    from { transform:rotate(0deg); }
    to { transform:rotate(360deg); }
}
.icon {
    width: 30px;
    height: 30px;
}
.preloader__icon {
    border: 2px solid rgb(157, 157, 157);
    border-right-color: transparent;
    border-radius: 100%;
    animation: spin 600ms infinite linear;
}
.download__icon {
    background-size: cover;
    background-image: url('../assets/upload.svg');
}
.wait__icon {
    background-size: cover;
    background-image: url('../assets/wait.svg');
}
.success__icon {
    background-size: cover;
    background-image: url('../assets/ok.svg');
}
</style>

